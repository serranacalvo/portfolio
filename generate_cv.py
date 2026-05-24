from pathlib import Path

lines = [
    "Serrana Calvo",
    "Software Developer & Project Lead",
    "",
    "Contact: serricalvo12@gmail.com | +598 94 299 485",
    "Location: Montevideo, Uruguay",
    "LinkedIn: linkedin.com/in/serranacalvo",
    "",
    "Profile",
    "Backend developer and project lead focused on APIs, integrations,",
    "automation, product delivery, and remote team coordination.",
    "",
    "Core Skills",
    "Node.js, TypeScript, JavaScript, NestJS, PostgreSQL, Docker, Jest,",
    "MongoDB, Jira, Azure DevOps, Figma, Scrum, Product Ownership.",
    "",
    "Professional Experience",
    "Pormel S.A. - Back End Developer",
    "Built backend solutions with Node.js, TypeScript, NestJS, PostgreSQL,",
    "hexagonal architecture, DDD, RESTful APIs, Jest, and Docker.",
    "",
    "Movistar (Telefonica Hispam) - Product Owner",
    "Managed backlog, user stories, prioritization, Agile ceremonies,",
    "and communication between stakeholders and technical teams.",
    "",
    "Hey Now Bots (Quantik Group) - Project Leader & Fullstack Developer",
    "Developed bots, REST APIs, automation scripts, integrations, and",
    "MongoDB-based solutions in remote and international contexts.",
    "",
    "Education",
    "Systems Engineering - ORT University Uruguay - Current Student",
    "Computer Engineering - University of the Republic - 2017-2019",
    "Electrical Engineering - University of the Republic - 2012-2016",
    "",
    "Selected Certifications",
    "Project Management Professional (PMP) - PMI - ID 3783245",
    "Scrum Product Owner Professional Certificate (SPOPC) - CertiProf",
    "Scrum Developer Professional Certificate (SDPC) - CertiProf",
    "Scrum Master Professional Certificate (SMPC) - CertiProf",
    "Business Intelligence Foundation Professional Certificate (BIFPC)",
    "Inventory Management Analyst Professional Certification (IMAPC)",
]


def escape_pdf_text(value):
    return value.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


stream_lines = ["BT", "/F1 12 Tf", "72 740 Td", "16 TL"]
for line in lines:
    stream_lines.append(f"({escape_pdf_text(line)}) Tj")
    stream_lines.append("T*")
stream_lines.append("ET")
stream = "\n".join(stream_lines).encode("latin1") + b"\n"

objs = [
    b"1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
    b"2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n",
]
page = (
    b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] "
    b"/Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\n"
)
objs.append(b"3 0 obj\n" + page + b"endobj\n")
objs.append(
    b"4 0 obj\n<< /Length %d >>\nstream\n" % len(stream)
    + stream
    + b"endstream\nendobj\n"
)
objs.append(b"5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n")

pdf = b"%PDF-1.4\n"
positions = []
for obj in objs:
    positions.append(len(pdf))
    pdf += obj

xref = b"xref\n0 %d\n0000000000 65535 f \n" % (len(objs) + 1)
for pos in positions:
    xref += f"{pos:010d} 00000 n \n".encode("latin1")

startxref = len(pdf)
trailer = b"trailer\n<< /Size %d /Root 1 0 R >>\nstartxref\n%d\n%%%%EOF\n" % (
    len(objs) + 1,
    startxref,
)
pdf += xref + trailer

Path("public").mkdir(exist_ok=True)
Path("public/cv.pdf").write_bytes(pdf)
print("Created public/cv.pdf", len(pdf))
