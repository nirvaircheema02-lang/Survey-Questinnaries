// Source: cybersecurity_perception_preview.html supplied with this project task.
export type QuestionType = "single" | "multi" | "number" | "text" | "ranking" | "rating" | "yes-detail"

export type Question = {
  number: number | string
  statement: string
  instruction: string
  type: QuestionType
  options?: string[]
  placeholder?: string
  min?: number
  max?: number
  additional?: boolean
}

export type Theme = {
  id: string
  number: number
  name: string
  description: string
  questions: Question[]
}

export const cybersecurityThemes: Theme[] = [
  {
    "id": "theme-1",
    "number": 1,
    "name": "Security Risk Review",
    "description": "Ransomware and access review triggers · MFA gaps and vendor outreach",
    "questions": [
      {
        "number": 1,
        "statement": "At your most recent security review before a vendor search, which risk was logged first?",
        "type": "single",
        "instruction": "Select one",
        "options": [
          "Ransomware on employee laptops",
          "Phishing-led account takeover",
          "Exposed cloud storage",
          "Unmanaged privileged accounts",
          "Supplier remote-access gap",
          "Not sure"
        ]
      },
      {
        "number": 2,
        "statement": "Who escalated that security risk into the review?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "CISO or security head",
          "IT infrastructure lead",
          "SOC incident analyst",
          "Internal audit team",
          "Risk or compliance officer",
          "None of these"
        ]
      },
      {
        "number": 3,
        "statement": "Which controls did the review team consider for that risk before contacting vendors?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "Endpoint detection and response",
          "Managed detection and response",
          "Identity access management",
          "Cloud posture management",
          "Email threat protection",
          "None of these"
        ]
      },
      {
        "number": 4,
        "statement": "Which control did the review approve for vendor evaluation first?",
        "type": "single",
        "instruction": "Select one",
        "options": [
          "Endpoint detection and response",
          "Managed detection and response",
          "Identity access management",
          "Cloud posture management",
          "Email threat protection",
          "Not sure"
        ]
      },
      {
        "number": 5,
        "statement": "For that approved control, which existing security gaps were written into the review notes?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "Ransomware alerts missed",
          "Privileged access not reviewed",
          "Cloud permissions left open",
          "SOC alerts reaching teams late",
          "Phishing emails bypassing filters",
          "None of these"
        ]
      },
      {
        "number": 6,
        "statement": "How many calendar days passed between logging that risk and approving cybersecurity vendor outreach?",
        "type": "number",
        "instruction": "Enter a number",
        "placeholder": "calendar days (0-365)",
        "min": 0,
        "max": 365
      },
      {
        "number": 7,
        "statement": "Before the vendor search, which temporary safeguards did your team apply to that same risk?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "Reset affected user passwords",
          "Enforce MFA on accounts",
          "Isolate exposed endpoints",
          "Remove excess admin rights",
          "Block suspicious email domains",
          "None of these"
        ]
      },
      {
        "number": 8,
        "statement": "Rank the security outcomes that carried the most weight when the team approved that vendor search.",
        "type": "ranking",
        "instruction": "Rank your top three",
        "options": [
          "Contain ransomware before spread",
          "Stop compromised account access",
          "Find risky cloud permissions",
          "Get actionable SOC alerts",
          "Block malicious email attachments"
        ]
      },
      {
        "number": 9,
        "statement": "Why did the highest-ranked security outcome matter for the risk logged at that review?",
        "type": "text",
        "instruction": "Provide a written response",
        "placeholder": "Enter your response..."
      },
      {
        "number": 10,
        "statement": "Which channel did you first use to find vendors for that approved security control?",
        "type": "single",
        "instruction": "Select one",
        "options": [
          "Security vendor website",
          "System integrator referral",
          "Peer CISO recommendation",
          "Analyst comparison report",
          "MSSP sales presentation",
          "Not sure"
        ]
      }
    ]
  },
  {
    "id": "theme-2",
    "number": 2,
    "name": "Vendor First Look",
    "description": "OEM websites and partner referrals · EDR brands and SOC claims",
    "questions": [
      {
        "number": 1,
        "statement": "At that first vendor-search source, whose enterprise security offering did you inspect first?",
        "type": "single",
        "instruction": "Select one",
        "options": [
          "Microsoft Security",
          "Palo Alto Networks",
          "CrowdStrike",
          "Fortinet",
          "Sophos",
          "Not sure"
        ]
      },
      {
        "number": 2,
        "statement": "On that first vendor listing, which details led you to open the cybersecurity offering?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "EDR capability named",
          "24x7 MDR desk listed",
          "Indian SOC presence stated",
          "Cloud identity integration listed",
          "Incident-response SLA shown",
          "None of these"
        ]
      },
      {
        "number": 3,
        "statement": "Which other cybersecurity providers did you open for comparison during that first search?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "Check Point",
          "Trend Micro",
          "SentinelOne",
          "Cisco Security",
          "Seqrite",
          "None of these"
        ]
      },
      {
        "number": 4,
        "statement": "What did you open next for the first provider you had inspected?",
        "type": "single",
        "instruction": "Select one",
        "options": [
          "EDR product datasheet",
          "MDR service brief",
          "SOC case study",
          "Threat detection demo",
          "Authorised partner page",
          "Not sure"
        ]
      },
      {
        "number": 5,
        "statement": "On that provider page, which promised security details could you not verify?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "Threat detection test evidence",
          "False-alert handling process",
          "SOC escalation contact",
          "Log-retention location",
          "Customer deployment example",
          "None of these"
        ]
      },
      {
        "number": 6,
        "statement": "How many minutes did you spend checking that provider during the first search session?",
        "type": "number",
        "instruction": "Enter a number",
        "placeholder": "minutes (0-360)",
        "min": 0,
        "max": 360
      },
      {
        "number": 7,
        "statement": "After that search, which proof did you actually request from the provider or channel partner?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "Attack detection demonstration",
          "Named enterprise reference",
          "SOC coverage schedule",
          "Sample incident report",
          "Integration architecture diagram",
          "None of these"
        ]
      },
      {
        "number": 8,
        "statement": "Rank the evidence that made a provider from that search worth examining further.",
        "type": "ranking",
        "instruction": "Rank your top three",
        "options": [
          "Verifiable attack detection results",
          "Reference from similar enterprise",
          "Local SOC escalation coverage",
          "Working SIEM integration evidence",
          "Clear incident-response ownership"
        ]
      },
      {
        "number": 9,
        "statement": "Why did your highest-ranked evidence move that security provider beyond the first search?",
        "type": "text",
        "instruction": "Provide a written response",
        "placeholder": "Enter your response..."
      },
      {
        "number": 10,
        "statement": "Which provider follow-up did you arrange first after inspecting the security claims?",
        "type": "single",
        "instruction": "Select one",
        "options": [
          "Technical discovery call",
          "Live detection demonstration",
          "Customer reference discussion",
          "Security questionnaire review",
          "MSSP partner meeting",
          "Not sure"
        ]
      }
    ]
  },
  {
    "id": "theme-3",
    "number": 3,
    "name": "Security Proof Checks",
    "description": "Detection evidence and independent audits · SOC references and incident SLAs",
    "questions": [
      {
        "number": 1,
        "statement": "At that first provider follow-up, which security proof was presented before anything else?",
        "type": "single",
        "instruction": "Select one",
        "options": [
          "Attack replay demonstration",
          "Red-team validation report",
          "Enterprise SOC case study",
          "Independent security audit",
          "Incident runbook sample",
          "Not sure"
        ]
      },
      {
        "number": 2,
        "statement": "Who from your organisation questioned that first piece of security proof?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "Security architect",
          "SOC operations manager",
          "CISO or deputy",
          "Risk and compliance lead",
          "IT infrastructure head",
          "None of these"
        ]
      },
      {
        "number": 3,
        "statement": "After seeing it, which further proof did your team request during that same session?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "Raw detection event logs",
          "Customer reference contact",
          "Independent audit evidence",
          "Incident escalation SLA",
          "SIEM integration documentation",
          "None of these"
        ]
      },
      {
        "number": 4,
        "statement": "Which requested proof did the provider actually supply before that session ended?",
        "type": "single",
        "instruction": "Select one",
        "options": [
          "Raw detection event logs",
          "Customer reference contact",
          "Independent audit evidence",
          "Incident escalation SLA",
          "SIEM integration documentation",
          "Not sure"
        ]
      },
      {
        "number": 5,
        "statement": "When checking that evidence, which gaps did your team record?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "Detection logs not provided",
          "Customer name could not be verified",
          "Audit scope excluded product",
          "Escalation owner left unnamed",
          "Connector proof missing",
          "None of these"
        ]
      },
      {
        "number": 6,
        "statement": "(If proof was missing) How many business days passed before the provider supplied the outstanding proof from that session?",
        "type": "number",
        "instruction": "Enter a number",
        "placeholder": "business days (0-90)",
        "min": 0,
        "max": 90
      },
      {
        "number": 7,
        "statement": "To resolve those proof gaps, which checks did your team carry out afterward?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "Speak to customer security lead",
          "Verify audit certificate scope",
          "Inspect raw event evidence",
          "Test SIEM connector claim",
          "Review SOC escalation runbook",
          "None of these"
        ]
      },
      {
        "number": 8,
        "statement": "Rank the checks that most influenced whether you accepted that provider's security claims.",
        "type": "ranking",
        "instruction": "Rank your top three",
        "options": [
          "Raw attack event evidence",
          "Relevant customer reference",
          "Valid audit scope",
          "Tested SIEM connector",
          "Named SOC escalation ownership"
        ]
      },
      {
        "number": 9,
        "statement": "Why did the top-ranked check shape your decision about that provider's security claim?",
        "type": "text",
        "instruction": "Provide a written response",
        "placeholder": "Enter your response..."
      },
      {
        "number": 10,
        "statement": "Which technical trial did your team authorise after reviewing the security proof?",
        "type": "single",
        "instruction": "Select one",
        "options": [
          "Endpoint EDR lab test",
          "XDR incident correlation pilot",
          "SIEM connector pilot",
          "MDR shadow-monitoring trial",
          "Cloud permissions pilot",
          "Not sure"
        ]
      }
    ]
  },
  {
    "id": "theme-4",
    "number": 4,
    "name": "Detection Pilot",
    "description": "EDR alerts and SIEM integration · False positives and analyst retesting",
    "questions": [
      {
        "number": 1,
        "statement": "In that authorised security trial, which workload did your team test first?",
        "type": "single",
        "instruction": "Select one",
        "options": [
          "Employee laptop endpoint",
          "Microsoft 365 email tenant",
          "Privileged login account",
          "Public cloud workload",
          "Firewall telemetry feed",
          "Not sure"
        ]
      },
      {
        "number": 2,
        "statement": "Which technical teams observed that first EDR, SIEM, or cloud-security test?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "SOC detection analysts",
          "Endpoint administration team",
          "Cloud platform engineers",
          "Identity security specialists",
          "MSSP deployment engineers",
          "None of these"
        ]
      },
      {
        "number": 3,
        "statement": "Which detection paths did you configure for comparison in that trial?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "Endpoint EDR alert stream",
          "SIEM correlation rule",
          "MDR analyst escalation",
          "Cloud posture alert",
          "Identity-risk notification",
          "None of these"
        ]
      },
      {
        "number": 4,
        "statement": "Which simulated cyber event did your team run first against those detection paths?",
        "type": "single",
        "instruction": "Select one",
        "options": [
          "Malware test-file execution",
          "Suspicious mailbox sign-in",
          "Privileged role escalation",
          "Exposed cloud bucket",
          "Blocked command execution",
          "Not sure"
        ]
      },
      {
        "number": 5,
        "statement": "During that cyber event, what broke in the detection or alert workflow?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "No endpoint alert generated",
          "SIEM connector dropped events",
          "Duplicate false-positive alerts",
          "Alert missed affected username",
          "MDR ticket arrived late",
          "None of these"
        ]
      },
      {
        "number": 6,
        "statement": "How many analyst-hours did your team spend fixing or retesting that first detection event?",
        "type": "number",
        "instruction": "Enter a number",
        "placeholder": "analyst-hours (0-200)",
        "min": 0,
        "max": 200
      },
      {
        "number": 7,
        "statement": "For your next EDR pilot, which corrective steps will you apply before repeating that detection event?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "Tune false-positive rules",
          "Repair event log connector",
          "Map alert to device owner",
          "Repeat simulated attack",
          "Rewrite MDR escalation step",
          "None of these"
        ]
      },
      {
        "number": 8,
        "statement": "Rank the results that most influenced whether that security vendor survived the pilot.",
        "type": "ranking",
        "instruction": "Rank your top three",
        "options": [
          "Malware action detected correctly",
          "Incident linked to real user",
          "Manageable false-positive volume",
          "Stable SIEM event ingestion",
          "MDR escalation within SLA"
        ]
      },
      {
        "number": 9,
        "statement": "Why did the highest-ranked detection result determine whether that provider stayed on your shortlist?",
        "type": "text",
        "instruction": "Provide a written response",
        "placeholder": "Enter your response..."
      },
      {
        "number": 10,
        "statement": "Which group received the pilot outcome for the cybersecurity purchase decision?",
        "type": "single",
        "instruction": "Select one",
        "options": [
          "CISO leadership team",
          "Architecture approval board",
          "Enterprise risk committee",
          "CIO office",
          "IT procurement group",
          "Not sure"
        ]
      }
    ]
  },
  {
    "id": "theme-5",
    "number": 5,
    "name": "CISO Signoff",
    "description": "CISO approvals and CERT-In clauses · DPDP readiness and log retention",
    "questions": [
      {
        "number": 1,
        "statement": "When those pilot findings reached the purchase group, which security approval gate was reviewed first?",
        "type": "single",
        "instruction": "Select one",
        "options": [
          "CISO technical approval",
          "Architecture board clearance",
          "Privacy or DPDP review",
          "Enterprise risk clearance",
          "IT procurement approval",
          "Not sure"
        ]
      },
      {
        "number": 2,
        "statement": "Who checked the pilot evidence before that security purchase approval?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "CISO or security director",
          "Chief information officer",
          "Privacy or legal counsel",
          "Finance controller",
          "Procurement category lead",
          "None of these"
        ]
      },
      {
        "number": 3,
        "statement": "Which safeguards did that group require in the proposed cybersecurity contract?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "CERT-In reporting assistance",
          "180-day ICT log retention",
          "Data-processing obligations",
          "Named 24x7 escalation owner",
          "Incident evidence export rights",
          "None of these"
        ]
      },
      {
        "number": 4,
        "statement": "Which safeguard did your team ask the vendor to put in the contract first?",
        "type": "single",
        "instruction": "Select one",
        "options": [
          "CERT-In reporting assistance",
          "180-day ICT log retention",
          "Data-processing obligations",
          "Named 24x7 escalation owner",
          "Incident evidence export rights",
          "Not sure"
        ]
      },
      {
        "number": 5,
        "statement": "When the revised contract returned, which cyber-risk terms remained unresolved?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "Reportable incident notification owner",
          "Indian log storage location",
          "Subprocessor access to data",
          "After-hours SOC response time",
          "Export of investigation evidence",
          "None of these"
        ]
      },
      {
        "number": 6,
        "statement": "(If clauses remained) How many working days did those unresolved security clauses add before the purchase decision?",
        "type": "number",
        "instruction": "Enter a number",
        "placeholder": "working days (0-180)",
        "min": 0,
        "max": 180
      },
      {
        "number": 7,
        "statement": "To clear the cybersecurity approval, what did your team do next?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "Obtain amended incident clause",
          "Verify Indian log storage",
          "Review subprocessor list",
          "Test escalation hotline",
          "Escalate to risk committee",
          "None of these"
        ]
      },
      {
        "number": 8,
        "statement": "Rank the contractual protections that carried the most weight at that approval gate.",
        "type": "ranking",
        "instruction": "Rank your top three",
        "options": [
          "Reportable incident notification help",
          "180-day searchable ICT logs",
          "Clear customer data responsibilities",
          "Named 24x7 SOC escalation",
          "Right to export breach evidence"
        ]
      },
      {
        "number": 9,
        "statement": "Why was the top-ranked cybersecurity contract protection decisive for the purchase approval?",
        "type": "text",
        "instruction": "Provide a written response",
        "placeholder": "Enter your response..."
      },
      {
        "number": 10,
        "statement": "Which team was assigned to deploy the selected security service after approval?",
        "type": "single",
        "instruction": "Select one",
        "options": [
          "Internal security operations",
          "Vendor professional services",
          "System integration partner",
          "MSSP delivery team",
          "Internal IT infrastructure",
          "Not sure"
        ]
      }
    ]
  },
  {
    "id": "theme-6",
    "number": 6,
    "name": "SOC Handover",
    "description": "SOC connector setup and handover · Partner delivery and escalation ownership",
    "questions": [
      {
        "number": 1,
        "statement": "At the first onboarding meeting with that deployment team, which security feed was connected first?",
        "type": "single",
        "instruction": "Select one",
        "options": [
          "Endpoint EDR events",
          "Microsoft 365 audit logs",
          "Firewall traffic logs",
          "Cloud activity logs",
          "VPN authentication events",
          "Not sure"
        ]
      },
      {
        "number": 2,
        "statement": "Which teams worked on that first security-feed connection?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "Internal SOC analysts",
          "IT infrastructure engineers",
          "Vendor deployment engineer",
          "MSSP monitoring team",
          "System integrator specialist",
          "None of these"
        ]
      },
      {
        "number": 3,
        "statement": "Which service promises from the vendor proposal were configured during that onboarding?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "24x7 SOC escalation",
          "180-day searchable logs",
          "Named incident runbook",
          "Privileged login alerts",
          "Cloud event ingestion",
          "None of these"
        ]
      },
      {
        "number": 4,
        "statement": "Which promised item did your SOC verify as working before accepting that first handover?",
        "type": "single",
        "instruction": "Select one",
        "options": [
          "24x7 SOC escalation",
          "180-day searchable logs",
          "Named incident runbook",
          "Privileged login alerts",
          "Cloud event ingestion",
          "Not sure"
        ]
      },
      {
        "number": 5,
        "statement": "At that handover, which differences appeared between the security sales pitch and working setup?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "Log feed silently missing",
          "Escalation engineer not named",
          "Runbook missing decision owner",
          "Privileged alert rule disabled",
          "Partner unable to tune connector",
          "None of these"
        ]
      },
      {
        "number": 6,
        "statement": "(If blockers appeared) How many calendar days passed before the last security handover blocker was closed?",
        "type": "number",
        "instruction": "Enter a number",
        "placeholder": "calendar days (0-180)",
        "min": 0,
        "max": 180
      },
      {
        "number": 7,
        "statement": "(If blockers appeared) At your next SOC handover, which corrective actions will you require before acceptance?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "Reconnect missing log source",
          "Nominate incident duty engineer",
          "Revise escalation runbook",
          "Retune privileged access alert",
          "Repeat SOC handover drill",
          "None of these"
        ]
      },
      {
        "number": 8,
        "statement": "Rank the checks your team used to decide whether to accept that live security handover.",
        "type": "ranking",
        "instruction": "Rank your top three",
        "options": [
          "All scoped logs arriving",
          "Escalation engineer reachable",
          "Runbook names decision owner",
          "Privileged alerts generating tickets",
          "Partner resolves connector faults"
        ]
      },
      {
        "number": 9,
        "statement": "Why did the top-ranked handover check change your confidence in the security provider?",
        "type": "text",
        "instruction": "Provide a written response",
        "placeholder": "Enter your response..."
      },
      {
        "number": 10,
        "statement": "Which first live alert or exercise tested the service after that handover?",
        "type": "single",
        "instruction": "Select one",
        "options": [
          "Suspicious employee login",
          "Malware endpoint alert",
          "Phishing mailbox report",
          "Cloud access anomaly",
          "Incident tabletop exercise",
          "Not sure"
        ]
      }
    ]
  },
  {
    "id": "theme-7",
    "number": 7,
    "name": "Incident Escalation",
    "description": "MDR alert escalation and containment · Incident logs and CERT-In reporting",
    "questions": [
      {
        "number": 1,
        "statement": "During that first SOC alert or tabletop after handover, what security event entered the incident queue?",
        "type": "single",
        "instruction": "Select one",
        "options": [
          "Suspicious employee login",
          "Malware endpoint alert",
          "Phishing mailbox report",
          "Cloud access anomaly",
          "Incident tabletop exercise",
          "Not sure"
        ]
      },
      {
        "number": 2,
        "statement": "Who was paged when the SOC classified that security event?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "In-house incident commander",
          "MSSP response analyst",
          "Affected application owner",
          "IT infrastructure duty lead",
          "Privacy or compliance officer",
          "None of these"
        ]
      },
      {
        "number": 3,
        "statement": "Which containment steps did your team consider for that same alert or exercise?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "Isolate affected endpoint",
          "Revoke suspicious login tokens",
          "Disable privileged account",
          "Block malicious network address",
          "Preserve logs for CERT-In review",
          "None of these"
        ]
      },
      {
        "number": 4,
        "statement": "Which containment step was actually started first for that alert or exercise?",
        "type": "single",
        "instruction": "Select one",
        "options": [
          "Isolate affected endpoint",
          "Revoke suspicious login tokens",
          "Disable privileged account",
          "Block malicious network address",
          "Preserve logs for CERT-In review",
          "Not sure"
        ]
      },
      {
        "number": 5,
        "statement": "After that step, which obstacles slowed the SOC investigation or simulated response?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "Vendor callback arrived late",
          "Endpoint logs were missing",
          "Affected system owner unreachable",
          "False positives buried ticket",
          "CERT-In reportability unclear",
          "None of these"
        ]
      },
      {
        "number": 6,
        "statement": "How many minutes elapsed between the SOC ticket opening and its first containment action or simulation?",
        "type": "number",
        "instruction": "Enter a number",
        "placeholder": "minutes (0-10080)",
        "min": 0,
        "max": 10080
      },
      {
        "number": 7,
        "statement": "After seeing that delay or result, which response did your team request from the provider?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "Escalate to 24x7 hotline",
          "Supply missing event logs",
          "Run additional threat hunt",
          "Correct the response runbook",
          "Confirm reportability with counsel",
          "None of these"
        ]
      },
      {
        "number": 8,
        "statement": "Rank the signals that most determined your confidence in that specific SOC response.",
        "type": "ranking",
        "instruction": "Rank your top three",
        "options": [
          "Actionable alert before damage",
          "Investigation logs available",
          "Named incident commander reachable",
          "Containment within contracted SLA",
          "Clear reportability decision"
        ]
      },
      {
        "number": 9,
        "statement": "Why did the top-ranked SOC response signal matter for that particular security ticket?",
        "type": "text",
        "instruction": "Provide a written response",
        "placeholder": "Enter your response..."
      },
      {
        "number": 10,
        "statement": "After closing that ticket or exercise, what did your team enter into the vendor review?",
        "type": "single",
        "instruction": "Select one",
        "options": [
          "SLA breach exception",
          "Detection rule change",
          "Incident runbook update",
          "Verified response success",
          "Provider escalation concern",
          "Not sure"
        ]
      }
    ]
  },
  {
    "id": "theme-8",
    "number": 8,
    "name": "License Renewal",
    "description": "EDR renewal and MSSP replacement · License quotes and peer referrals",
    "questions": [
      {
        "number": 1,
        "statement": "At the vendor review following that SOC ticket, which cybersecurity contract decision came onto the agenda?",
        "type": "single",
        "instruction": "Select one",
        "options": [
          "Renew existing EDR license",
          "Extend MDR monitoring scope",
          "Replace the MSSP",
          "Consolidate security platforms",
          "Reduce duplicated SIEM tools",
          "Not sure"
        ]
      },
      {
        "number": 2,
        "statement": "Which decision-makers examined the incident record during that vendor review?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "CISO or security director",
          "SOC service owner",
          "Chief information officer",
          "Procurement category lead",
          "Finance budget owner",
          "None of these"
        ]
      },
      {
        "number": 3,
        "statement": "Which commercial paths did the committee compare after reviewing the SOC record?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "Twelve-month EDR renewal",
          "Thirty-six-month security contract",
          "Additional MDR coverage",
          "Replacement MSSP proposal",
          "Consolidated SIEM or XDR stack",
          "None of these"
        ]
      },
      {
        "number": 4,
        "statement": "Which contract path did the committee advance after that comparison?",
        "type": "single",
        "instruction": "Select one",
        "options": [
          "Twelve-month EDR renewal",
          "Thirty-six-month security contract",
          "Additional MDR coverage",
          "Replacement MSSP proposal",
          "Consolidated SIEM or XDR stack",
          "Not sure"
        ]
      },
      {
        "number": 5,
        "statement": "On that chosen path, which quoted charges needed an explanation?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "EDR per-endpoint licensing",
          "SIEM log-ingestion volume",
          "24x7 MDR analyst cover",
          "Incident-response retainer",
          "Migration and integration fees",
          "None of these"
        ]
      },
      {
        "number": 6,
        "statement": "What annual rupee amount appeared on the latest cybersecurity provider quote your committee reviewed?",
        "type": "number",
        "instruction": "Enter a number",
        "placeholder": "₹ per year (0-1000000000)",
        "min": 0,
        "max": 1000000000
      },
      {
        "number": 7,
        "statement": "After checking that quote and incident record, which actions did your team take before the next signoff?",
        "type": "multi",
        "instruction": "Select all that apply",
        "options": [
          "Request revised license quote",
          "Seek second MSSP quotation",
          "Ask peer CISO for reference",
          "Renegotiate incident-response SLA",
          "Schedule another detection pilot",
          "None of these"
        ]
      },
      {
        "number": 8,
        "statement": "Rank what most influenced whether your committee backed the incumbent or another security provider.",
        "type": "ranking",
        "instruction": "Rank your top three",
        "options": [
          "Proven containment in SOC ticket",
          "Predictable annual license bill",
          "Complete incident evidence logs",
          "Better competing detection trial",
          "One accountable escalation owner"
        ]
      },
      {
        "number": 9,
        "statement": "Why did your top-ranked reason determine the recommendation you gave on that cybersecurity contract?",
        "type": "text",
        "instruction": "Provide a written response",
        "placeholder": "Enter your response..."
      },
      {
        "number": 10,
        "statement": "Which next decision did the committee actually schedule after the cybersecurity renewal review?",
        "type": "single",
        "instruction": "Select one",
        "options": [
          "Final renewal approval",
          "Competing vendor demonstration",
          "Thirty-day detection pilot",
          "Procurement price negotiation",
          "Peer security reference call",
          "Not sure"
        ]
      }
    ]
  }
]
