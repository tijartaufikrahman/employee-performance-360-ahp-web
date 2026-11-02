<p align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg" alt="ASP.NET Core MVC" width="70" height="70" />
</p>

<h1 align="center">Employee Performance Evaluation System - Web Portal (360° & AHP)</h1>

<p align="center">
  <b>Modern ASP.NET Core 8 MVC web dashboard for 360-Degree employee performance evaluation and Analytical Hierarchy Process (AHP) decision support, featuring self & peer assessments, automated scoring matrix, ranking analytics, and printable evaluation reports.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/.NET-8.0-512BD4?style=flat&logo=dotnet&logoColor=white" alt=".NET 8" />
  <img src="https://img.shields.io/badge/ASP.NET_Core-MVC-512BD4?style=flat&logo=dotnet&logoColor=white" alt="ASP.NET Core MVC" />
  <img src="https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat&logo=bootstrap&logoColor=white" alt="Bootstrap 5" />
  <img src="https://img.shields.io/badge/jQuery-3.7-0769AD?style=flat&logo=jquery&logoColor=white" alt="jQuery" />
  <img src="https://img.shields.io/badge/DataTables-1.13-336699?style=flat" alt="DataTables" />
  <img src="https://img.shields.io/badge/SweetAlert-2-8549BA?style=flat" alt="SweetAlert2" />
</p>

---

## 📌 Overview

**Employee Performance Evaluation Web Portal** is an enterprise-grade Decision Support System (Sistem Pendukung Keputusan / SPK) designed to provide objective, transparent, and multi-dimensional employee evaluations. 

By synthesizing **360-Degree Feedback** (self-assessments, peer reviews, and supervisor evaluations) with the mathematical rigor of the **Analytical Hierarchy Process (AHP)**, the system eliminates personal bias and subjectivity in performance appraisals.

The portal provides tailored experiences for two primary roles:
1. **HRD & Management**: Complete administrative control over evaluation periods, criteria management, AHP pairwise weight calibrations, multi-evaluator assignments, consolidated rankings, and decision recommendations.
2. **Employees / Staff**: Intuitive self-evaluation interface, reciprocal peer feedback workflows, personalized KPI summaries, and printable official evaluation report cards (*Rapor Kinerja*).

---

## 🚀 Key Features

### 🏢 Administrator & HRD Management Suite
- **Executive Analytics Dashboard (`AdminController/Dashboard`):**
  - High-level KPI metric cards: Active Assessment Periods, Total Evaluated Employees, Completed Evaluations, and Pending Reviews.
  - Quick action shortcuts to configure periods and calculate final rankings.
- **Criteria & Weighting Configuration (`MasterKriteria` & `MasterBobotAHP`):**
  - Full management of evaluation criteria and sub-criteria dimensions.
  - Interactive Saaty pairwise comparison matrix input interface.
  - Real-time calculation of priority vectors (eigenvectors) with strict consistency ratio validation ($CR < 0.1$).
- **Performance Category Management (`MasterKategori`):**
  - Custom grade classifications with scoring ranges, badges, and action recommendations (e.g., *Sangat Baik / Promosi*, *Baik*, *Cukup*, *Kurang / Pembinaan*).
- **Evaluation Period Lifecycle (`Periode` & `TambahPeriode`):**
  - Create and schedule evaluation cycles (Monthly, Quarterly, Annual).
  - Activate/Deactivate periods and manage evaluator-evaluatee pairing matrices.
- **Employee Master Directory (`Karyawan`):**
  - Comprehensive staff directory with employee codes (`KRY-xxx`), department, role assignments, and profile photo management.
- **Consolidated Ranking & Scoring Engine (`HasilPenilaian`):**
  - Automated calculation merging 360-degree feedback with normalized AHP criteria weights.
  - Interactive DataTables with multi-column sorting, instant search, and rank stratification.
- **Evaluation History Archive (`RiwayatPenilaian` / `HistoryPenilaian`):**
  - Historical audit trails and past period evaluation records for longitudinal performance tracking.

### 👥 Employee Self-Service & Peer Review Portal
- **Personalized Staff Dashboard (`KaryawanController/Dashboard`):**
  - Real-time notification of pending peer reviews and active self-assessment tasks.
- **360-Degree Evaluation Interface (`Evaluasi360` & `PenilaianKinerja`):**
  - Guided questionnaire forms featuring rubric-based scoring across established criteria.
  - Clear visual progress tracking for ongoing evaluations.
- **Personal Performance Analytics (`KinerjaPribadi`):**
  - Visual breakdown of scores received across criteria dimensions compared against team averages.
- **Official Evaluation Report Card (`RaporKinerja`):**
  - Standardized, print-ready formal report card detailing total score, final grade category, criteria breakdown, and HR recommendations.
- **Evaluation History (`RiwayatEvaluasi`):**
  - Personal log of completed self-evaluations and peer reviews.

### 🛡️ Security & Architecture
- **JWT Bearer Authentication Bridge:**
  - Robust multi-layer jQuery AJAX interceptor (`$.ajaxPrefilter`, `ajaxSend`, `$.ajaxSetup`) ensuring seamless Bearer token transmission.
  - Automatic token expiration handling and graceful re-authentication redirection.
- **Role-Based Access Control (RBAC):**
  - Server-side route authorization and dynamic navigation sidebar rendering based on user roles (HRD vs. Karyawan).
- **Self-Service Account Recovery:**
  - Password reset workflow with email-based OTP (One-Time Password) verification powered by MailKit SMTP.

---

## 🛠️ Technology Stack

| Category | Technologies |
|---|---|
| **Framework & Engine** | ASP.NET Core 8.0 MVC (Model-View-Controller) |
| **Language** | C# 12 / Razor View Engine |
| **Styling & UI Components** | Bootstrap 5.3, Plus Jakarta Sans typography, FontAwesome 6 |
| **Data Tables** | DataTables.net 1.13.7 with Bootstrap 5 responsive styling |
| **Client Scripting** | JavaScript (ES6+), jQuery 3.7.1 |
| **Modals & Alerts** | SweetAlert2, Toast notifications, custom modal dialogues |
| **API Integration** | RESTful HTTP client with unified JWT Bearer session bridge |

---

## 📂 Project Architecture

```plaintext
SistemPenilaian/
├── Controllers/                  # MVC Action Controllers
│   ├── AccountController.cs      # Login, OTP verification, password reset
│   ├── AdminController.cs        # Administrative, AHP, & evaluation management
│   ├── HomeController.cs         # Default routing and landing redirects
│   ├── KaryawanController.cs     # Employee portal, 360 evaluation, & reports
│   └── TemplateController.cs     # Shared UI template components
├── Models/                       # ViewModels and Client Data Models
├── Views/                        # Razor Views (.cshtml)
│   ├── Account/                  # Login, ForgotPassword, VerifyOtp, ResetPassword
│   ├── Admin/                    # Dashboard, BobotAHP, Kriteria, Kategori, Periode, HasilPenilaian
│   ├── Karyawan/                 # Dashboard, Evaluasi360, PenilaianKinerja, KinerjaPribadi, RaporKinerja
│   ├── Shared/                   # _Layout.cshtml, _ValidationScriptsPartial.cshtml, Error.cshtml
│   └── Template/                 # Reusable UI component samples (Table, Card, Form, Modal)
├── wwwroot/                      # Static web assets
│   ├── css/                      # Custom stylesheets & component themes
│   ├── js/                       # Client JavaScript & api-config.js (JWT Interceptor)
│   ├── img/                      # Logos, icons, and employee avatar uploads
│   └── lib/                      # Vendor libraries (Bootstrap, jQuery, DataTables)
├── appsettings.json              # Client application settings
├── Program.cs                    # ASP.NET Core 8 Web Host bootstrap & middleware configuration
├── SistemPenilaian.csproj        # .NET 8 project dependencies definition
└── .gitignore                    # Git tracking ignore rules
```

---

## ⚙️ Quick Start & Setup Guide

### Prerequisites
- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- Modern Web Browser (Chrome, Edge, Firefox)
- Running instance of **Employee Performance Web API** (Backend service)

### 1. Configuration
Open `wwwroot/js/api-config.js` and verify the backend API endpoint URL:
```javascript
window.API_BASE_URL = window.API_BASE_URL || (activeProto + '//localhost:21005/api');
```

### 2. Run the Application
Navigate to the project root directory and start the application:
```bash
dotnet restore
dotnet run
```

By default, the web dashboard will be accessible at:
- **Web Portal URL**: `http://localhost:20005`

---

## 👤 Default Demo Credentials

| Role | Email | Password | Access Level |
|---|---|---|---|
| **HRD / Admin** | `hrd@sistempenilaian.com` | `Admin123!` | Full Administrative & AHP Setup Access |
| **Karyawan 1** | `budi@sistempenilaian.com` | `Karyawan123!` | Employee 360 Evaluation & Report Card |
| **Karyawan 2** | `siti@sistempenilaian.com` | `Karyawan123!` | Employee 360 Evaluation & Report Card |
| **Karyawan 3** | `ahmad@sistempenilaian.com` | `Karyawan123!` | Employee 360 Evaluation & Report Card |

---

## 🔗 Related Repositories

- **Backend Web API**: [employee-performance-360-ahp-api](https://github.com/tijartaufikrahman/employee-performance-360-ahp-api.git)
