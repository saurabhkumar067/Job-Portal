import React from "react";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AccessAll from "./components/AccessAll";
import BackendDeveloperIntern from "./components/jobsDisc/BackendDeveloperIntern";
import AnimatorIntern from "./components/jobsDisc/AnimatorIntern";
import AutomationOperative from "./components/jobsDisc/AutomationOperative";
import DeploymentOperative from "./components/jobsDisc/DeploymentOperative";
import LegalComplianceProfessional from "./components/jobsDisc/LegalComplianceProfessional";
import ResearchDevelopmentSpecialist from "./components/jobsDisc/ResearchDevelopmentSpecialist";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <AccessAll />,
        },
        {
          path: "/backend_developer-intern",
          element: <BackendDeveloperIntern />,
        },
        {
          path: "/animator-intern",
          element: <AnimatorIntern />,
        },
        {
          path: "/automation_operative",
          element: <AutomationOperative />,
        },
        {
          path: "/deployment_operative",
          element: <DeploymentOperative />,
        },
        {
          path: "/legal_compliance-professional",
          element: <LegalComplianceProfessional />,
        },
        {
          path: "/research_development_specialist",
          element: <ResearchDevelopmentSpecialist />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
