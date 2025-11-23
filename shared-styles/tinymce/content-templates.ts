/**
 * Liverpool Dental - TinyMCE Content Templates
 *
 * Reusable content layout templates for instructors
 * Used across all xblocks with rich text editing (accordion, tabs, flashcards)
 *
 * USAGE: Instructors click "Template" button in TinyMCE toolbar → select layout → edit content
 */

/**
 * Content templates for TinyMCE template plugin
 * Each template includes:
 * - title: Display name in template dropdown
 * - description: Help text shown to instructors
 * - content: HTML structure with placeholder content
 */
export const contentTemplates = [
  {
    title: '📐 Image + Text (Side by Side)',
    description: 'Place an image next to explanatory text',
    content: `
      <div class="content-media-object">
        <div class="content-media-figure">
          <img src="https://via.placeholder.com/250x200/006272/ffffff?text=Your+Image" alt="Replace with your image">
        </div>
        <div class="content-media-body">
          <h3>Your Heading</h3>
          <p>Your text content goes here. Click the image and use the toolbar image button to replace it with your own image from the course assets.</p>
        </div>
      </div>
    `
  },
  {
    title: '↔️ Two Columns (Compare)',
    description: 'Compare two concepts side by side',
    content: `
      <div class="content-two-column">
        <div class="content-column">
          <h4>Concept A</h4>
          <p>Description of first concept goes here...</p>
        </div>
        <div class="content-column">
          <h4>Concept B</h4>
          <p>Description of second concept goes here...</p>
        </div>
      </div>
    `
  },
  {
    title: 'ℹ️ Info Box',
    description: 'Highlight important information',
    content: `
      <div class="content-callout callout-info">
        <div class="callout-icon">ℹ️</div>
        <div class="callout-content">
          <h5>Important Note</h5>
          <p>Your important message here...</p>
        </div>
      </div>
    `
  },
  {
    title: '⚠️ Warning Box',
    description: 'Highlight warnings or contraindications',
    content: `
      <div class="content-callout callout-warning">
        <div class="callout-icon">⚠️</div>
        <div class="callout-content">
          <h5>Clinical Warning</h5>
          <p>Your warning message here...</p>
        </div>
      </div>
    `
  },
  {
    title: '✓ Success Box',
    description: 'Highlight best practices or success criteria',
    content: `
      <div class="content-callout callout-success">
        <div class="callout-icon">✓</div>
        <div class="callout-content">
          <h5>Best Practice</h5>
          <p>Your best practice message here...</p>
        </div>
      </div>
    `
  },
  {
    title: '🖼️ Image Gallery (3 Columns)',
    description: 'Display multiple images in a grid - images auto-crop to square cards',
    content: `
      <div class="content-card-grid">
        <div class="content-card">
          <div class="content-card-image">
            <img src="https://via.placeholder.com/400x400/006272/ffffff?text=Image+1" alt="Case Study 1">
          </div>
          <h4>Case Study 1</h4>
          <p>Brief description of this case...</p>
        </div>
        <div class="content-card">
          <div class="content-card-image">
            <img src="https://via.placeholder.com/400x400/006272/ffffff?text=Image+2" alt="Case Study 2">
          </div>
          <h4>Case Study 2</h4>
          <p>Brief description of this case...</p>
        </div>
        <div class="content-card">
          <div class="content-card-image">
            <img src="https://via.placeholder.com/400x400/006272/ffffff?text=Image+3" alt="Case Study 3">
          </div>
          <h4>Case Study 3</h4>
          <p>Brief description of this case...</p>
        </div>
      </div>
    `
  },
  {
    title: '🖼️ Figure with Caption',
    description: 'Image with a detailed caption below',
    content: `
      <figure class="content-figure">
        <img src="https://via.placeholder.com/600x400/006272/ffffff?text=Your+Diagram" alt="Your image description">
        <figcaption>
          <strong>Figure 1:</strong> Detailed caption describing the image content and significance...
        </figcaption>
      </figure>
    `
  },
  {
    title: '🏥 Clinical Case Study (SOAP)',
    description: 'Structured patient case presentation',
    content: `
      <div class="content-case-study">
        <div class="case-study-header">
          <h4>Patient Case: [Patient ID or Description]</h4>
        </div>
        <div class="case-study-section">
          <div class="section-label">Subjective</div>
          <div class="section-content">
            <p>Chief complaint: Patient presents with...</p>
            <p>History: Patient reports...</p>
          </div>
        </div>
        <div class="case-study-section">
          <div class="section-label">Objective</div>
          <div class="section-content">
            <p>Clinical findings:</p>
            <ul>
              <li>Oral examination reveals...</li>
              <li>Radiographic findings show...</li>
              <li>Periodontal assessment indicates...</li>
            </ul>
          </div>
        </div>
        <div class="case-study-section">
          <div class="section-label">Assessment</div>
          <div class="section-content">
            <p>Diagnosis: [Primary diagnosis]</p>
            <p>Differential diagnosis: [Other considerations]</p>
          </div>
        </div>
        <div class="case-study-section">
          <div class="section-label">Plan</div>
          <div class="section-content">
            <p>Treatment plan:</p>
            <ul>
              <li>Immediate: [First-line treatment]</li>
              <li>Short-term: [Follow-up procedures]</li>
              <li>Long-term: [Ongoing maintenance]</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '🔄 Before & After Comparison',
    description: 'Visual comparison of treatment outcomes - images auto-crop to 4:3 ratio',
    content: `
      <div class="content-before-after">
        <div class="before-after-panel">
          <div class="before-after-image">
            <img src="https://via.placeholder.com/400x300/006272/ffffff?text=Before+Treatment" alt="Before treatment">
          </div>
          <div class="panel-label">Before Treatment</div>
          <p class="panel-description">Baseline presentation: Advanced periodontal disease with 6-7mm pockets</p>
        </div>
        <div class="before-after-arrow">→</div>
        <div class="before-after-panel">
          <div class="before-after-image">
            <img src="https://via.placeholder.com/400x300/006272/ffffff?text=After+Treatment" alt="After treatment">
          </div>
          <div class="panel-label">After Treatment (6 months)</div>
          <p class="panel-description">Post-treatment outcome: Reduced pocket depths to 2-3mm, healthy gingiva</p>
        </div>
      </div>
    `
  },
  {
    title: '📋 Step-by-Step Procedure',
    description: 'Numbered clinical procedure guide',
    content: `
      <div class="content-procedure">
        <div class="procedure-step">
          <div class="procedure-number"></div>
          <div class="procedure-content">
            <h5>Local Anesthesia Administration</h5>
            <p>Administer 2% lidocaine with 1:100,000 epinephrine via inferior alveolar nerve block</p>
            <ul>
              <li>Aspiration test before injection</li>
              <li>Wait 3-5 minutes for adequate anesthesia</li>
            </ul>
          </div>
        </div>
        <div class="procedure-step">
          <div class="procedure-number"></div>
          <div class="procedure-content">
            <h5>Crown Preparation</h5>
            <p>Reduce occlusal surface by 1.5-2.0mm using depth-cutting burs</p>
          </div>
        </div>
        <div class="procedure-step">
          <div class="procedure-number"></div>
          <div class="procedure-content">
            <h5>Axial Reduction</h5>
            <p>Prepare facial and lingual walls with 6-degree taper, maintaining 1.0mm shoulder margin</p>
          </div>
        </div>
        <div class="procedure-step">
          <div class="procedure-number"></div>
          <div class="procedure-content">
            <h5>Impression Taking</h5>
            <p>Take final impression using polyvinyl siloxane material with dual-arch technique</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '📖 Definition/Terminology',
    description: 'Define dental terms with pronunciation',
    content: `
      <div class="content-definition">
        <div class="definition-term">Periodontitis</div>
        <div class="definition-pronunciation">/ˌper.i.ə.dɒnˈtaɪ.tɪs/</div>
        <p class="definition-meaning">
          An inflammatory disease affecting the supporting structures of the teeth (periodontium),
          characterized by progressive loss of alveolar bone and periodontal ligament destruction.
          If left untreated, periodontitis can lead to tooth mobility and eventual tooth loss.
          The condition is primarily caused by bacterial plaque accumulation and the host immune response.
        </p>
      </div>
    `
  },
  {
    title: '⏱️ Treatment Timeline',
    description: 'Multi-phase procedure timeline',
    content: `
      <div class="content-timeline">
        <div class="timeline-item">
          <div class="timeline-marker timeline-marker-complete"></div>
          <div class="timeline-content">
            <h5>Initial Consultation & Assessment</h5>
            <p>Comprehensive oral examination, radiographs, treatment planning discussion</p>
            <span class="timeline-date">Week 1</span>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker timeline-marker-complete"></div>
          <div class="timeline-content">
            <h5>Phase I: Non-Surgical Therapy</h5>
            <p>Scaling and root planing, oral hygiene instruction, antimicrobial therapy</p>
            <span class="timeline-date">Weeks 2-4</span>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h5>Re-evaluation Appointment</h5>
            <p>Assess healing response, measure pocket depths, determine need for surgical intervention</p>
            <span class="timeline-date">Week 8</span>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h5>Phase II: Surgical Therapy (if needed)</h5>
            <p>Flap surgery, bone grafting, or guided tissue regeneration as indicated</p>
            <span class="timeline-date">Weeks 10-12</span>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h5>Supportive Periodontal Therapy</h5>
            <p>Ongoing maintenance every 3-4 months to prevent disease recurrence</p>
            <span class="timeline-date">Ongoing</span>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '📚 Evidence Summary',
    description: 'Research findings and clinical guidelines',
    content: `
      <div class="content-evidence">
        <div class="evidence-header">
          <div class="evidence-icon">📚</div>
          <div class="evidence-citation">
            Smith J, et al. (2023). "Efficacy of minimally invasive periodontal surgery:
            A systematic review and meta-analysis." Journal of Clinical Periodontology, 50(4), 456-472.
          </div>
        </div>
        <div class="evidence-label">Key Findings</div>
        <ul class="evidence-findings">
          <li>Minimally invasive surgical technique resulted in 23% greater clinical attachment gain compared to traditional flap surgery (p < 0.001)</li>
          <li>Patients reported significantly reduced post-operative discomfort (VAS score: 2.1 vs 5.4, p < 0.001)</li>
          <li>Aesthetic outcomes superior in anterior regions with papilla preservation techniques</li>
          <li>Healing time reduced by average of 7-10 days compared to conventional approaches</li>
        </ul>
      </div>
    `
  },
  {
    title: '📊 Quick Reference Table',
    description: 'Structured data in table format',
    content: `
      <div class="content-reference-table">
        <table>
          <thead>
            <tr>
              <th>Drug Name</th>
              <th>Adult Dosage</th>
              <th>Pediatric Dosage</th>
              <th>Key Considerations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Amoxicillin</td>
              <td>500mg TID × 7 days</td>
              <td>20-40mg/kg/day divided TID</td>
              <td>First-line for dentoalveolar infections</td>
            </tr>
            <tr>
              <td>Metronidazole</td>
              <td>400mg TID × 7 days</td>
              <td>7.5mg/kg TID</td>
              <td>Effective against anaerobes, avoid alcohol</td>
            </tr>
            <tr>
              <td>Clindamycin</td>
              <td>300mg QID × 7 days</td>
              <td>8-16mg/kg/day divided TID-QID</td>
              <td>Alternative for penicillin-allergic patients</td>
            </tr>
            <tr>
              <td>Azithromycin</td>
              <td>500mg day 1, then 250mg daily × 4 days</td>
              <td>10mg/kg day 1, then 5mg/kg × 4 days</td>
              <td>Good tissue penetration, once-daily dosing</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    title: '🎥 Video with Context',
    description: 'Embed video with learning objectives',
    content: `
      <div class="content-video-embed">
        <div class="video-header">
          <h4>Crown Preparation Technique Demonstration</h4>
          <p class="video-description">
            This 15-minute video demonstrates the complete workflow for preparing an upper first molar
            for a full-coverage ceramic crown, including reduction guidelines and margin design.
          </p>
        </div>
        <div class="video-container">
          <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video demonstration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="video-takeaways">
          <h5>Key Takeaways</h5>
          <ul>
            <li>Occlusal reduction of 1.5-2.0mm required for adequate ceramic thickness</li>
            <li>Axial walls prepared with 6-degree total convergence angle</li>
            <li>Chamfer or shoulder margin design preferred for all-ceramic restorations</li>
            <li>Finish line must be supragingival or equigingival for tissue health</li>
            <li>Smooth, continuous preparation margins essential for impression accuracy</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: '🔀 Complexity Classification (Chevron Flow)',
    description: 'Horizontal progression showing case complexity levels - ideal for AAE classifications',
    content: `
      <div class="content-complexity-chevron">
        <div class="complexity-chevron-item">
          <div class="complexity-chevron-badge badge-class-1">1</div>
          <div class="complexity-chevron-content content-class-1">
            <div class="chevron-title">Class 1: Uncomplicated</div>
            <div class="chevron-description">Low risk of adverse events • Suitable for recent graduates or dentists with limited endodontic experience</div>
          </div>
        </div>
        <div class="complexity-chevron-item">
          <div class="complexity-chevron-badge badge-class-2">2</div>
          <div class="complexity-chevron-content content-class-2">
            <div class="chevron-title">Class 2: Moderately Complex</div>
            <div class="chevron-description">Moderate risk of complications or compromised outcome • Ideally suited for practitioners with enhanced clinical experience</div>
          </div>
        </div>
        <div class="complexity-chevron-item">
          <div class="complexity-chevron-badge badge-class-3">3</div>
          <div class="complexity-chevron-content content-class-3">
            <div class="chevron-title">Class 3: Highly Complex</div>
            <div class="chevron-description">Higher risk of complications or compromised outcome • Ideally suited for specialist endodontic practitioners</div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '🔽 Complexity Classification (Vertical Blocks)',
    description: 'Stacked complexity tiers with detailed criteria - perfect for referral guidelines',
    content: `
      <div class="content-complexity-blocks">
        <div class="complexity-block-item">
          <div class="complexity-block-badge badge-class-1">
            <div class="badge-label">Class</div>
            <div class="badge-number">1</div>
          </div>
          <div class="complexity-block-content content-class-1">
            <h5>Uncomplicated Cases</h5>
            <ul>
              <li>Low risk of adverse events</li>
              <li>Vital or necrotic single-canal teeth</li>
              <li>Straight forward access and canal identification</li>
              <li>No anatomical complications</li>
              <li>Suitable for general practitioners</li>
            </ul>
          </div>
        </div>
        <div class="complexity-block-item">
          <div class="complexity-block-badge badge-class-2">
            <div class="badge-label">Class</div>
            <div class="badge-number">2</div>
          </div>
          <div class="complexity-block-content content-class-2">
            <h5>Moderately Complex Cases</h5>
            <ul>
              <li>Moderate risk of complications</li>
              <li>Multi-rooted teeth with curved canals</li>
              <li>Limited access or visibility challenges</li>
              <li>Previous endodontic treatment requiring revision</li>
              <li>Requires enhanced clinical experience</li>
            </ul>
          </div>
        </div>
        <div class="complexity-block-item">
          <div class="complexity-block-badge badge-class-3">
            <div class="badge-label">Class</div>
            <div class="badge-number">3</div>
          </div>
          <div class="complexity-block-content content-class-3">
            <h5>Highly Complex Cases</h5>
            <ul>
              <li>Higher risk of complications</li>
              <li>Severe canal calcification or blockage</li>
              <li>Open apex or root resorption present</li>
              <li>Fractured instruments or perforation</li>
              <li>Requires specialist referral</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '📊 Progressive Scale with Examples',
    description: 'Chevron progression with radiographic or clinical examples below - shows disease stages or anatomical variations',
    content: `
      <div class="content-progressive-scale">
        <div class="progressive-scale-header">
          <h4>Pulp Chamber or Canal Visibility with Previous RCT</h4>
          <p>Progressive scale showing decreasing visibility when gutta-percha is short</p>
        </div>
        <div class="progressive-scale-chevrons">
          <div class="progressive-chevron" style="background: #4caf50;">GP can be traced to apex</div>
          <div class="progressive-chevron" style="background: #8bc34a;">Canal space visible beyond GP (when GP short)</div>
          <div class="progressive-chevron" style="background: #ffc107;">Canal space visible beyond GP but reduced diameter</div>
          <div class="progressive-chevron" style="background: #ff5722;">Canal space completely invisible beyond GP</div>
        </div>
        <div class="progressive-scale-examples">
          <div class="progressive-example">
            <div class="example-image">
              <img src="https://via.placeholder.com/300x225/4caf50/ffffff?text=Stage+1" alt="GP traced to apex">
            </div>
            <div class="example-label">Optimal filling - full canal visibility</div>
          </div>
          <div class="progressive-example">
            <div class="example-image">
              <img src="https://via.placeholder.com/300x225/8bc34a/ffffff?text=Stage+2" alt="Canal visible beyond GP">
            </div>
            <div class="example-label">Short fill - canal still visible</div>
          </div>
          <div class="progressive-example">
            <div class="example-image">
              <img src="https://via.placeholder.com/300x225/ffc107/333333?text=Stage+3" alt="Reduced diameter">
            </div>
            <div class="example-label">Short fill - reduced canal diameter</div>
          </div>
          <div class="progressive-example">
            <div class="example-image">
              <img src="https://via.placeholder.com/300x225/ff5722/ffffff?text=Stage+4" alt="Canal invisible">
            </div>
            <div class="example-label">Short fill - canal completely invisible</div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '🌳 Vertical Decision Tree with Callout',
    description: 'Flowchart with rounded nodes and optional risk panel - perfect for previous endodontics assessment',
    content: `
      <div class="content-decision-tree">
        <div class="decision-tree-flow">
          <div class="decision-node">
            <p><strong>Previously initiated but not obturated</strong> endodontic treatment</p>
          </div>
          <div class="decision-arrow">↓</div>
          <div class="decision-node">
            <p><strong>Canal(s) suboptimally obturated</strong> with gutta-percha</p>
          </div>
          <div class="decision-arrow">↓</div>
          <div class="decision-node">
            <p><strong>Canal(s) well obturated</strong> with gutta-percha or obturation is &gt;2mm overfilled</p>
          </div>
          <div class="decision-arrow">↓</div>
          <div class="decision-node">
            <p><strong>Canal(s) obturated with other materials</strong> (e.g. Silver cones, resin based filling, bioceramic material)</p>
          </div>
        </div>
        <div class="decision-tree-callout">
          <h5>Risks & Challenges</h5>
          <ul>
            <li>Negotiating potential pre-operative ledge</li>
            <li>Removing RCF material in entirety</li>
            <li>Locating missed canals or anatomy</li>
            <li>Managing perforations or strip perforations</li>
            <li>Dealing with separated instruments</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: '✅ Diagnostic Criteria Checklist',
    description: 'Assessment grid with present/absent/unknown indicators - for clinical diagnosis',
    content: `
      <div class="content-diagnostic-checklist">
        <div class="diagnostic-checklist-header">
          <h4 class="diagnostic-header-title">Pulpal Diagnosis Criteria</h4>
        </div>
        <div class="diagnostic-section">
          <div class="diagnostic-section-header">Clinical Tests</div>
          <div class="diagnostic-item">
            <div class="diagnostic-item-indicator indicator-present"></div>
            <div class="diagnostic-item-label">Positive response to cold test (prolonged pain)</div>
          </div>
          <div class="diagnostic-item">
            <div class="diagnostic-item-indicator indicator-absent"></div>
            <div class="diagnostic-item-label">Response to heat test</div>
          </div>
          <div class="diagnostic-item">
            <div class="diagnostic-item-indicator indicator-present"></div>
            <div class="diagnostic-item-label">Spontaneous pain (unprovoked)</div>
          </div>
        </div>
        <div class="diagnostic-section">
          <div class="diagnostic-section-header">Radiographic Findings</div>
          <div class="diagnostic-item">
            <div class="diagnostic-item-indicator indicator-absent"></div>
            <div class="diagnostic-item-label">Periapical radiolucency present</div>
          </div>
          <div class="diagnostic-item">
            <div class="diagnostic-item-indicator indicator-present"></div>
            <div class="diagnostic-item-label">Widened PDL space</div>
          </div>
          <div class="diagnostic-item">
            <div class="diagnostic-item-indicator indicator-unknown"></div>
            <div class="diagnostic-item-label">Internal resorption visible</div>
          </div>
        </div>
        <div class="diagnostic-interpretation">
          <h5>Diagnosis: Symptomatic Irreversible Pulpitis</h5>
          <p>Based on prolonged response to cold, spontaneous pain, and absence of periapical pathology. Recommend root canal treatment or extraction.</p>
        </div>
      </div>
    `
  },
  {
    title: '⚖️ Treatment Comparison Matrix',
    description: 'Side-by-side treatment options with color-coded pros/cons - evidence-based decision making',
    content: `
      <div class="content-treatment-matrix">
        <table class="treatment-matrix-table">
          <thead>
            <tr>
              <th>Criteria</th>
              <th class="matrix-recommended">Root Canal Treatment</th>
              <th>Extraction & Implant</th>
              <th>Extraction Only</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Preserves natural tooth</td>
              <td class="matrix-cell-advantage">Yes - maintains natural dentition</td>
              <td class="matrix-cell-disadvantage">No - tooth removed</td>
              <td class="matrix-cell-disadvantage">No - tooth removed</td>
            </tr>
            <tr>
              <td>Treatment duration</td>
              <td class="matrix-cell-advantage">2-3 visits over 2 weeks</td>
              <td class="matrix-cell-disadvantage">4-6 months total (healing + restoration)</td>
              <td class="matrix-cell-advantage">Single visit</td>
            </tr>
            <tr>
              <td>Long-term success rate</td>
              <td class="matrix-cell-advantage">85-97% at 8-10 years</td>
              <td class="matrix-cell-advantage">90-95% at 10 years</td>
              <td class="matrix-cell-neutral">N/A - creates edentulous space</td>
            </tr>
            <tr>
              <td>Cost (approximate)</td>
              <td class="matrix-cell-advantage">£400-800 (+ crown £500-1200)</td>
              <td class="matrix-cell-disadvantage">£2000-3000 total</td>
              <td class="matrix-cell-advantage">£50-150</td>
            </tr>
            <tr>
              <td>Bone preservation</td>
              <td class="matrix-cell-advantage">Maintains alveolar bone</td>
              <td class="matrix-cell-neutral">Initial loss, then maintained</td>
              <td class="matrix-cell-disadvantage">Progressive bone resorption</td>
            </tr>
            <tr>
              <td>Adjacent teeth impact</td>
              <td class="matrix-cell-advantage">No impact on adjacent teeth</td>
              <td class="matrix-cell-neutral">No impact (may require grafting)</td>
              <td class="matrix-cell-disadvantage">Potential drifting/tilting</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    title: '🧬 Differential Diagnosis Grid',
    description: 'Match diagnoses against clinical findings with visual indicators - systematic diagnostic approach',
    content: `
      <div class="content-differential-diagnosis">
        <table class="diagnosis-grid">
          <thead>
            <tr>
              <th>Candidate Diagnosis</th>
              <th>Cold Test +</th>
              <th>Heat Test +</th>
              <th>Percussion +</th>
              <th>Palpation +</th>
              <th>PAP Visible</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Normal Pulp</td>
              <td class="diagnosis-match-positive"></td>
              <td class="diagnosis-match-negative"></td>
              <td class="diagnosis-match-negative"></td>
              <td class="diagnosis-match-negative"></td>
              <td class="diagnosis-match-negative"></td>
            </tr>
            <tr>
              <td>Reversible Pulpitis</td>
              <td class="diagnosis-match-positive"></td>
              <td class="diagnosis-match-variable"></td>
              <td class="diagnosis-match-negative"></td>
              <td class="diagnosis-match-negative"></td>
              <td class="diagnosis-match-negative"></td>
            </tr>
            <tr class="diagnosis-conclusion">
              <td>Symptomatic Irreversible Pulpitis</td>
              <td class="diagnosis-match-positive"></td>
              <td class="diagnosis-match-positive"></td>
              <td class="diagnosis-match-variable"></td>
              <td class="diagnosis-match-negative"></td>
              <td class="diagnosis-match-negative"></td>
            </tr>
            <tr>
              <td>Pulpal Necrosis</td>
              <td class="diagnosis-match-negative"></td>
              <td class="diagnosis-match-negative"></td>
              <td class="diagnosis-match-positive"></td>
              <td class="diagnosis-match-positive"></td>
              <td class="diagnosis-match-positive"></td>
            </tr>
            <tr>
              <td>Symptomatic Apical Periodontitis</td>
              <td class="diagnosis-match-negative"></td>
              <td class="diagnosis-match-negative"></td>
              <td class="diagnosis-match-positive"></td>
              <td class="diagnosis-match-positive"></td>
              <td class="diagnosis-match-variable"></td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  }
];

/**
 * Flashcard-specific templates
 * Simple, focused templates optimized for 500px flashcard height
 */
export const flashcardTemplates = [
  {
    title: '📝 Simple Text',
    description: 'Heading with paragraph - clean and simple',
    content: `
      <div class="fc-simple-text">
        <h4>Your Heading</h4>
        <p>Your explanation or definition goes here. Keep it concise and focused on one concept.</p>
      </div>
    `
  },
  {
    title: '✓✗ True/False',
    description: 'Statement with colored verdict',
    content: `
      <div class="fc-truefalse-card">
        <p class="fc-statement">Statement to evaluate</p>
        <div class="fc-verdict-badge fc-false">FALSE</div>
        <p class="fc-why"><strong>Why:</strong> Brief explanation</p>
      </div>
    `
  },
  {
    title: '🖼️ Image + Note',
    description: 'Large image with brief caption',
    content: `
      <figure class="content-figure fc-compact">
        <img src="https://via.placeholder.com/250x180/006272/ffffff?text=Your+Image" alt="Image description">
        <figcaption>Brief caption or key point about the image</figcaption>
      </figure>
    `
  },
  {
    title: '⚖️ Compare Two',
    description: 'Side-by-side comparison',
    content: `
      <div class="fc-compare-boxes">
        <div class="fc-compare-item fc-item-a">
          <div class="fc-compare-label">Option A</div>
          <p>Key characteristic</p>
        </div>
        <div class="fc-compare-vs">vs</div>
        <div class="fc-compare-item fc-item-b">
          <div class="fc-compare-label">Option B</div>
          <p>Key characteristic</p>
        </div>
      </div>
    `
  }
];

/**
 * TinyMCE configuration for template plugin
 * Import this into your TinyMCEEditor.tsx
 */
export const templateConfig = {
  templates: contentTemplates,

  // Allow custom classes for layout patterns
  valid_classes: {
    '*': 'content-*,callout-*'
  },

  // Ensure divs and figures are allowed
  valid_elements: '*[*]',
  extended_valid_elements: '*[*]'
};
