# SPDX-FileCopyrightText: 2026 Pace Wisdom Solutions Pvt. Ltd.
# SPDX-License-Identifier: Apache-2.0

from django.urls import path
from .views import AdminDashboardView, TeacherDashboardView, StudentDashboardView


# All routes below are mounted under API_ORG_PREFIX ("api/organizations/")
# by lms_core.urls. Note the admin route places the 'analytics/' segment
# before <org_id>, while the teacher/student routes place it after.
urlpatterns = [
    path(
        'analytics/<int:org_id>/daily-metrics/',
        AdminDashboardView.as_view(),
        name='admin_dashboard',
    ),
    path(
        '<int:org_id>/batches/<int:batch_id>/analytics/',
        TeacherDashboardView.as_view(),
        name='teacher_dashboard',
    ),
    path(
        '<int:org_id>/students/me/dashboard/',
        StudentDashboardView.as_view(),
        name='student_dashboard',
    ),
]
