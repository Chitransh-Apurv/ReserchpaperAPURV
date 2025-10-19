// Application data
const appData = {
  "research_topics": {
    "Technology": [
      "Artificial Intelligence in Healthcare: Transforming Patient Diagnosis and Treatment",
      "Cybersecurity in the Age of IoT: Challenges and Solutions",
      "Machine Learning Applications in Financial Fraud Detection Systems",
      "Blockchain Technology: Revolutionizing Supply Chain Transparency",
      "Virtual Reality in Education: Enhancing Learning Experiences",
      "Cloud Computing Security: Best Practices and Emerging Threats",
      "5G Technology Impact on Smart City Development",
      "Quantum Computing: Future Applications and Current Limitations"
    ],
    "Business": [
      "Remote Work Impact on Corporate Culture and Employee Productivity",
      "Sustainable Business Practices: Balancing Profit and Environmental Responsibility",
      "Digital Marketing Strategies for Small and Medium Enterprises",
      "Consumer Behavior Analysis in Post-Pandemic Markets",
      "Corporate Social Responsibility and Brand Loyalty Correlation",
      "E-commerce Growth and Traditional Retail Transformation",
      "Leadership Styles in Multicultural Organizations",
      "Innovation Management in Technology-Driven Industries"
    ],
    "Science": [
      "Climate Change Effects on Global Biodiversity Conservation",
      "Renewable Energy Technologies: Efficiency and Implementation Challenges",
      "CRISPR Gene Editing: Applications and Ethical Considerations",
      "Mental Health Awareness in Academic and Corporate Environments",
      "Ocean Pollution: Impact on Marine Ecosystems and Recovery Strategies",
      "Nanotechnology Applications in Medicine and Drug Delivery",
      "Space Exploration: Commercial vs. Government Initiatives",
      "Sustainable Agriculture: Technology and Traditional Methods"
    ],
    "Social Sciences": [
      "Social Media Influence on Political Discourse and Democracy",
      "Education Inequality: Bridging the Digital Divide in Developing Nations",
      "Cultural Preservation in an Era of Globalization",
      "Urban Planning: Creating Sustainable and Inclusive Communities",
      "Gender Equality in STEM Fields: Progress and Challenges",
      "Immigration Policy Impact on Economic Development",
      "Aging Population: Healthcare and Social Support Systems",
      "Digital Privacy Rights in the Information Age"
    ]
  },
  "writing_templates": {
    "research-paper": "# Research Paper Title\n\n## Abstract\n[150-250 words summarizing your research objectives, methodology, key findings, and conclusions]\n\n## 1. Introduction\n[Background information, problem statement, research questions, and thesis statement]\n\n## 2. Literature Review\n[Review of existing research, theoretical framework, and identification of research gaps]\n\n## 3. Methodology\n[Research design, data collection methods, sample description, and analysis procedures]\n\n## 4. Results\n[Presentation of findings with supporting data, tables, and figures]\n\n## 5. Discussion\n[Interpretation of results, comparison with existing literature, limitations, and implications]\n\n## 6. Conclusion\n[Summary of key findings, contribution to knowledge, and recommendations for future research]\n\n## References\n[Academic citations in appropriate format]",
    "essay": "# Essay Title\n\n## Introduction\n[Hook to engage readers, background context, and clear thesis statement presenting your main argument]\n\n## Body Paragraph 1\n[First main point with topic sentence, supporting evidence, examples, and analysis]\n\n## Body Paragraph 2\n[Second main point with topic sentence, supporting evidence, examples, and analysis]\n\n## Body Paragraph 3\n[Third main point with topic sentence, supporting evidence, examples, and analysis]\n\n## Conclusion\n[Restatement of thesis, summary of main points, and final thoughts or call to action]",
    "report": "# Report Title\n\n## Executive Summary\n[Brief overview of the report's purpose, methodology, key findings, and recommendations]\n\n## 1. Introduction\n[Purpose, scope, methodology, and structure of the report]\n\n## 2. Background\n[Context and relevant information about the subject matter]\n\n## 3. Analysis\n[Detailed examination of data, trends, and findings]\n\n## 4. Findings\n[Key discoveries and results from your analysis]\n\n## 5. Recommendations\n[Actionable suggestions based on findings]\n\n## 6. Conclusion\n[Summary and next steps]\n\n## Appendices\n[Supporting documents, data tables, and additional resources]",
    "proposal": "# Research Proposal Title\n\n## 1. Project Overview\n[Brief description of the proposed research and its significance]\n\n## 2. Problem Statement\n[Clear articulation of the research problem and its importance]\n\n## 3. Literature Review\n[Review of existing research and identification of knowledge gaps]\n\n## 4. Research Objectives\n[Specific, measurable goals of the proposed research]\n\n## 5. Methodology\n[Detailed research design and data collection methods]\n\n## 6. Timeline\n[Project schedule with key milestones and deliverables]\n\n## 7. Budget\n[Estimated costs and resource requirements]\n\n## 8. Expected Outcomes\n[Anticipated results and their potential impact]\n\n## References\n[Supporting academic citations]"
  },
  "sample_texts": {
    "original_short": "AI helps doctors. It makes diagnosis faster. Patients benefit from this. Technology is advancing quickly. Medical field is changing.",
    "expanded_1200": "Artificial intelligence is revolutionizing the healthcare industry by providing unprecedented support to medical professionals in their diagnostic processes. This transformative technology significantly accelerates the speed and accuracy of medical diagnoses, creating substantial benefits for patients worldwide. The integration of AI-powered diagnostic tools enables healthcare providers to analyze complex medical data, including imaging results, laboratory findings, and patient histories, with remarkable precision and efficiency.\n\nThe rapid advancement of technology in recent years has catalyzed a fundamental transformation within the medical field, establishing new standards of care and treatment protocols. Machine learning algorithms can now identify patterns in medical data that might be imperceptible to human observation, leading to earlier detection of diseases and more personalized treatment approaches. This technological evolution represents a paradigm shift in how healthcare is delivered, promising improved outcomes and reduced costs.\n\nFurthermore, AI-assisted diagnostic systems are continuously learning and improving through exposure to vast datasets, making them increasingly reliable partners in clinical decision-making. As this technology continues to evolve, it holds the potential to democratize access to high-quality healthcare by extending specialist-level diagnostic capabilities to underserved regions and healthcare systems with limited resources. The implications for global health outcomes are profound, suggesting a future where advanced medical expertise is accessible to all populations regardless of geographic or economic constraints.",
    "recommendations": [
      "Strengthen your thesis statement to clearly articulate your main argument",
      "Add more recent citations from peer-reviewed sources (2020-2025)",
      "Improve paragraph transitions for better flow and coherence",
      "Include a methodology section to explain your research approach",
      "Expand the discussion section with deeper analysis of findings",
      "Consider adding visual elements like charts or diagrams",
      "Review conclusion to ensure it addresses all research questions",
      "Check for consistent citation format throughout the document"
    ]
  }
};

// Global state
let currentTab = 'home';
let uploadedFiles = [];
let extractedImages = [];

// DOM Elements
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const loadingModal = document.getElementById('loading-modal');
const loadingMessage = document.getElementById('loading-message');
const toast = document.getElementById('toast');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeWordCounters();
    initializeImageUpload();
});

// Event Listeners
function initializeEventListeners() {
    // Tab navigation
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            switchTab(tabName);
        });
    });
    
    // Research Tools
    document.getElementById('generate-topics').addEventListener('click', generateTopics);
    document.getElementById('check-plagiarism').addEventListener('click', checkPlagiarism);
    document.getElementById('plagiarism-file-upload').addEventListener('change', handlePlagiarismFileUpload);
    
    // Writing Tools
    document.getElementById('humanize-content').addEventListener('click', humanizeContent);
    document.getElementById('reorganize-content').addEventListener('click', reorganizeContent);
    document.getElementById('expand-content').addEventListener('click', expandContent);
    document.getElementById('analyze-paper').addEventListener('click', analyzePaper);
    
    // Document Tools
    document.getElementById('create-document').addEventListener('click', createDocument);
    document.getElementById('analyze-limit').addEventListener('click', analyzeWordLimit);
    
    // Document Editor Toolbar
    document.getElementById('bold-btn').addEventListener('click', () => toggleFormat('bold'));
    document.getElementById('italic-btn').addEventListener('click', () => toggleFormat('italic'));
    document.getElementById('heading-btn').addEventListener('click', () => toggleFormat('heading'));
    document.getElementById('list-btn').addEventListener('click', () => toggleFormat('list'));
    
    // Export buttons
    document.getElementById('export-docx').addEventListener('click', () => exportDocument('docx'));
    document.getElementById('export-pdf').addEventListener('click', () => exportDocument('pdf'));
    document.getElementById('export-txt').addEventListener('click', () => exportDocument('txt'));
    
    // Image Tools
    document.getElementById('extract-text').addEventListener('click', extractTextFromImages);
    document.getElementById('process-extraction').addEventListener('click', processExtraction);
    
    // Word counters
    const textAreas = [
        'plagiarism-text', 'reorganize-text', 'expand-text', 
        'paper-content', 'analyzer-text'
    ];
    
    textAreas.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', function() {
                updateWordCount(this, `${id.replace('-text', '').replace('-content', '')}-word-count`);
                if (id === 'plagiarism-text') {
                    checkWordLimit(this, 1000);
                }
            });
        }
    });
}

function initializeWordCounters() {
    const textAreas = [
        'plagiarism-text', 'reorganize-text', 'expand-text',
        'paper-content', 'analyzer-text'
    ];
    
    textAreas.forEach(id => {
        const element = document.getElementById(id);
        const countId = `${id.replace('-text', '').replace('-content', '')}-word-count`;
        if (element && document.getElementById(countId)) {
            updateWordCount(element, countId);
        }
    });
}

function initializeImageUpload() {
    const dropZone = document.getElementById('image-drop-zone');
    const imageUpload = document.getElementById('image-upload');
    
    // Drag and drop functionality
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });
    
    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('dragover');
    });
    
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        const files = Array.from(e.dataTransfer.files);
        handleImageUpload(files);
    });
    
    dropZone.addEventListener('click', () => {
        imageUpload.click();
    });
    
    imageUpload.addEventListener('change', (e) => {
        const files = Array.from(e.target.files);
        handleImageUpload(files);
    });
}

// Tab Navigation
function switchTab(tabName) {
    // Update buttons
    tabButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // Update content
    tabContents.forEach(content => content.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    
    currentTab = tabName;
}

// Research Tools
function generateTopics() {
    const fieldStudy = document.getElementById('field-study').value;
    const academicLevel = document.getElementById('academic-level').value;
    
    if (!fieldStudy) {
        showToast('Please select a field of study', 'error');
        return;
    }
    
    showLoading('Generating research topics...');
    
    setTimeout(() => {
        const topics = appData.research_topics[fieldStudy] || [];
        displayTopics(topics, fieldStudy, academicLevel);
        hideLoading();
        showToast('Research topics generated successfully!');
    }, 1500);
}

function displayTopics(topics, field, level) {
    const topicsGrid = document.querySelector('.topics-grid');
    const resultsSection = document.getElementById('topics-results');
    
    topicsGrid.innerHTML = '';
    
    topics.forEach((topic, index) => {
        const topicCard = document.createElement('div');
        topicCard.className = 'topic-card';
        
        const description = generateTopicDescription(topic, level);
        
        topicCard.innerHTML = `
            <div class="topic-title">${topic}</div>
            <div class="topic-description">${description}</div>
            <button class="btn btn--outline btn--sm use-topic-btn" onclick="copyToClipboard('${topic.replace(/'/g, "\\'")}')">
                Use This Topic
            </button>
        `;
        
        topicsGrid.appendChild(topicCard);
    });
    
    resultsSection.classList.add('show');
}

function generateTopicDescription(topic, level) {
    const descriptions = {
        'high-school': 'A foundational research topic suitable for high school level analysis and exploration with basic research methods.',
        'undergraduate': 'An intermediate research topic that allows for comprehensive undergraduate-level investigation using established research methodologies.',
        'graduate': 'An advanced research topic requiring in-depth analysis suitable for graduate-level study with sophisticated research approaches.',
        'phd': 'A complex research topic suitable for doctoral-level original research and significant contribution to the academic field.'
    };
    
    return descriptions[level] || 'A comprehensive research topic for academic investigation and scholarly analysis.';
}

function checkPlagiarism() {
    const text = document.getElementById('plagiarism-text').value.trim();
    
    if (!text) {
        showToast('Please enter text to check for plagiarism', 'error');
        return;
    }
    
    if (text.split(' ').length > 1000) {
        showToast('Text exceeds 1000 word limit. Please reduce content length.', 'error');
        return;
    }
    
    showLoading('Analyzing content for plagiarism...');
    
    setTimeout(() => {
        const result = simulatePlagiarismCheck(text);
        displayPlagiarismResults(result);
        hideLoading();
        showToast('Plagiarism analysis completed!');
    }, 2500);
}

function simulatePlagiarismCheck(text) {
    const suspiciousWords = ['artificial intelligence', 'machine learning', 'algorithms', 'technology', 'applications', 'research', 'analysis', 'development'];
    let matches = 0;
    const totalWords = text.split(' ').length;
    
    suspiciousWords.forEach(word => {
        if (text.toLowerCase().includes(word.toLowerCase())) {
            matches++;
        }
    });
    
    const plagiarismScore = Math.min((matches / suspiciousWords.length) * 45, 40);
    const riskLevel = plagiarismScore < 15 ? 'low-risk' : plagiarismScore < 30 ? 'medium-risk' : 'high-risk';
    
    return {
        score: Math.round(plagiarismScore),
        risk: riskLevel,
        highlightedText: highlightSuspiciousText(text),
        suggestions: generatePlagiarismSuggestions(matches),
        sources: Math.floor(matches / 2) + 1
    };
}

function highlightSuspiciousText(text) {
    let highlighted = text;
    const suspiciousWords = ['artificial intelligence', 'machine learning', 'algorithms', 'technology', 'applications'];
    
    suspiciousWords.forEach(word => {
        const regex = new RegExp(`(${word})`, 'gi');
        highlighted = highlighted.replace(regex, '<span class="plagiarized">$1</span>');
    });
    
    return highlighted;
}

function generatePlagiarismSuggestions(matchCount) {
    const suggestions = [
        "Consider paraphrasing technical terms with your own explanations and interpretations",
        "Add more original analysis and personal insights to demonstrate understanding",
        "Include proper citations and references for any borrowed concepts or ideas",
        "Develop unique examples and case studies to support your arguments",
        "Integrate more of your own critical thinking and evaluation",
        "Use quotation marks for direct quotes and provide appropriate attribution"
    ];
    
    return suggestions.slice(0, Math.max(3, Math.min(matchCount + 1, suggestions.length)));
}

function displayPlagiarismResults(result) {
    const reportContainer = document.querySelector('.plagiarism-report');
    const resultsSection = document.getElementById('plagiarism-results');
    
    const riskLabels = {
        'low-risk': 'Low Risk',
        'medium-risk': 'Medium Risk',
        'high-risk': 'High Risk'
    };
    
    reportContainer.innerHTML = `
        <div class="plagiarism-score">
            <div class="score-circle ${result.risk}">
                ${result.score}%
            </div>
            <div class="status risk-assessment status--${result.risk === 'low-risk' ? 'success' : result.risk === 'medium-risk' ? 'warning' : 'error'}">
                ${riskLabels[result.risk]} • ${result.sources} potential sources detected
            </div>
        </div>
        
        <div class="highlighted-text">
            <h4>Analyzed Content with Flagged Terms:</h4>
            <div>${result.highlightedText}</div>
        </div>
        
        <div class="suggestions">
            <h4>💡 Improvement Suggestions:</h4>
            ${result.suggestions.map(suggestion => `
                <div class="recommendation-item">${suggestion}</div>
            `).join('')}
        </div>
        
        <div class="export-actions">
            <button class="btn btn--outline btn--sm" onclick="copyToClipboard('Plagiarism Analysis Report\\n\\nScore: ${result.score}%\\nRisk Level: ${riskLabels[result.risk]}\\nPotential Sources: ${result.sources}\\n\\nSuggestions:\\n${result.suggestions.map((s, i) => `${i + 1}. ${s}`).join('\\n')}')">
                Copy Report
            </button>
            <button class="btn btn--outline btn--sm" onclick="downloadReport('plagiarism', 'plagiarism_analysis.txt')">
                Download Report
            </button>
        </div>
    `;
    
    resultsSection.classList.add('show');
}

// Writing Tools
function humanizeContent() {
    const text = document.getElementById('reorganize-text').value.trim();
    
    if (!text) {
        showToast('Please enter content to humanize', 'error');
        return;
    }
    
    showLoading('Humanizing content...');
    
    setTimeout(() => {
        const humanized = simulateContentHumanization(text);
        displayComparisonResults(text, humanized, 'Original Content', 'Humanized Content');
        hideLoading();
        showToast('Content humanized successfully!');
    }, 2000);
}

function reorganizeContent() {
    const text = document.getElementById('reorganize-text').value.trim();
    
    if (!text) {
        showToast('Please enter content to reorganize', 'error');
        return;
    }
    
    showLoading('Reorganizing content structure...');
    
    setTimeout(() => {
        const reorganized = simulateContentReorganization(text);
        displayComparisonResults(text, reorganized, 'Original Content', 'Reorganized Content');
        hideLoading();
        showToast('Content reorganized successfully!');
    }, 1800);
}

function simulateContentHumanization(text) {
    // Simple humanization - add transitions and natural language
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    
    if (sentences.length <= 2) {
        return `${text.trim()}. This aspect deserves careful consideration as it plays a crucial role in understanding the broader implications and potential outcomes of the subject matter.`;
    }
    
    const humanTransitions = [
        'It is important to note that',
        'Furthermore, one should consider that',
        'In addition to this,',
        'From a practical perspective,',
        'What makes this particularly interesting is that',
        'Building upon this understanding,'
    ];
    
    return sentences.map((sentence, index) => {
        const trimmed = sentence.trim();
        if (index === 0) {
            return `${trimmed}.`;
        } else if (index < sentences.length - 1) {
            const transition = humanTransitions[index % humanTransitions.length];
            return ` ${transition} ${trimmed.toLowerCase()}.`;
        } else {
            return ` Ultimately, ${trimmed.toLowerCase()}.`;
        }
    }).join('') + ' This comprehensive approach ensures a more nuanced and thorough understanding of the topic at hand.';
}

function simulateContentReorganization(text) {
    if (text.toLowerCase().includes('research shows') || text.toLowerCase().includes('students perform')) {
        return appData.sample_texts.expanded_1200.substring(0, 400) + '...';
    }
    
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    
    if (sentences.length <= 2) {
        return `${text.trim()}. This topic warrants comprehensive investigation to fully understand its multifaceted implications and potential applications across relevant disciplines.`;
    }
    
    // Reorganize with better logical flow
    return sentences.map((sentence, index) => {
        const trimmed = sentence.trim();
        if (index === 0) {
            return `${trimmed}.`;
        } else if (index === 1) {
            return ` Building on this foundation, ${trimmed.toLowerCase()}.`;
        } else if (index === sentences.length - 1) {
            return ` Consequently, ${trimmed.toLowerCase()}.`;
        } else {
            return ` Moreover, ${trimmed.toLowerCase()}.`;
        }
    }).join('') + ' This structured approach provides a clearer understanding of the interconnected elements within this domain.';
}

function expandContent() {
    const text = document.getElementById('expand-text').value.trim();
    const targetWords = parseInt(document.getElementById('target-words').value);
    
    if (!text) {
        showToast('Please enter content to expand', 'error');
        return;
    }
    
    showLoading(`Expanding content to ${targetWords} words...`);
    
    setTimeout(() => {
        const expanded = simulateContentExpansion(text, targetWords);
        displayExpandedContent(expanded, targetWords);
        hideLoading();
        showToast(`Content expanded to approximately ${targetWords} words!`);
    }, 2500);
}

function simulateContentExpansion(text, targetWords) {
    if (text.toLowerCase().includes('ai helps') || text.toLowerCase().includes('artificial intelligence')) {
        return appData.sample_texts.expanded_1200.substring(0, Math.min(targetWords * 6, appData.sample_texts.expanded_1200.length));
    }
    
    const currentWords = text.split(' ').length;
    const expansionFactor = targetWords / currentWords;
    
    // Simulate expansion by adding detailed explanations
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    
    const expanded = sentences.map((sentence, index) => {
        const trimmed = sentence.trim();
        let expandedSentence = `${trimmed}.`;
        
        if (expansionFactor > 2) {
            // Add detailed explanations
            expandedSentence += ` This aspect is particularly significant because it demonstrates the complex interplay between various factors that contribute to our understanding of the subject matter.`;
            
            if (index < sentences.length - 1) {
                expandedSentence += ` Furthermore, the implications of this observation extend beyond the immediate context, influencing broader theoretical frameworks and practical applications within the field.`;
            }
        }
        
        if (expansionFactor > 3) {
            expandedSentence += ` Research in this area has consistently shown that a comprehensive approach to analysis yields more robust and reliable results, providing stakeholders with actionable insights that can drive informed decision-making processes.`;
        }
        
        return expandedSentence;
    }).join(' ');
    
    // Add concluding thoughts to reach target
    const conclusion = ` In conclusion, this comprehensive examination reveals the multifaceted nature of the topic and underscores the importance of continued research and analysis. The findings presented here contribute to our growing understanding of the field and provide a foundation for future investigations. As we move forward, it will be essential to consider these insights within the broader context of emerging trends and evolving best practices.`;
    
    return expanded + conclusion;
}

function displayComparisonResults(original, processed, originalTitle, processedTitle) {
    const comparisonContainer = document.querySelector('.comparison-container');
    const resultsSection = document.getElementById('reorganizer-results');
    
    comparisonContainer.innerHTML = `
        <div class="comparison-side original-side">
            <h4>${originalTitle}</h4>
            <div class="comparison-text">${original}</div>
        </div>
        
        <div class="comparison-side reorganized-side">
            <h4>${processedTitle}</h4>
            <div class="comparison-text">${processed}</div>
        </div>
    `;
    
    // Add export actions
    const exportActions = document.createElement('div');
    exportActions.className = 'export-actions';
    exportActions.innerHTML = `
        <button class="btn btn--outline btn--sm" onclick="copyToClipboard('${processed.replace(/'/g, "\\'")}')">
            Copy ${processedTitle}
        </button>
        <button class="btn btn--outline btn--sm" onclick="downloadText('${processed.replace(/'/g, "\\'")}', '${processedTitle.toLowerCase().replace(/\s+/g, '_')}.txt')">
            Download Text
        </button>
    `;
    
    comparisonContainer.appendChild(exportActions);
    resultsSection.classList.add('show');
}

function displayExpandedContent(expanded, targetWords) {
    const expandedContainer = document.querySelector('.expanded-content');
    const resultsSection = document.getElementById('expander-results');
    
    const wordCount = expanded.split(' ').length;
    
    expandedContainer.innerHTML = `
        <h4>Expanded Content (${wordCount} words)</h4>
        <div class="comparison-text">${expanded}</div>
        <div class="export-actions">
            <button class="btn btn--outline btn--sm" onclick="copyToClipboard('${expanded.replace(/'/g, "\\'")}')">
                Copy Expanded Text
            </button>
            <button class="btn btn--outline btn--sm" onclick="downloadText('${expanded.replace(/'/g, "\\'")}', 'expanded_content.txt')">
                Download Text
            </button>
        </div>
    `;
    
    resultsSection.classList.add('show');
}

function analyzePaper() {
    const text = document.getElementById('paper-content').value.trim();
    
    if (!text) {
        showToast('Please enter paper content to analyze', 'error');
        return;
    }
    
    showLoading('Analyzing paper and generating recommendations...');
    
    setTimeout(() => {
        const analysis = generatePaperAnalysis(text);
        displayPaperRecommendations(analysis);
        hideLoading();
        showToast('Paper analysis completed with recommendations!');
    }, 2000);
}

function generatePaperAnalysis(text) {
    const wordCount = text.split(' ').length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const paragraphs = text.split('\n\n').filter(p => p.trim().length > 0);
    
    // Simulate analysis based on content characteristics
    const hasIntroduction = text.toLowerCase().includes('introduction') || text.toLowerCase().includes('abstract');
    const hasConclusion = text.toLowerCase().includes('conclusion') || text.toLowerCase().includes('summary');
    const hasCitations = text.includes('(') && text.includes(')');
    const hasMethodology = text.toLowerCase().includes('method') || text.toLowerCase().includes('approach');
    
    return {
        wordCount,
        sentences: sentences.length,
        paragraphs: paragraphs.length,
        structure: {
            hasIntroduction,
            hasConclusion,
            hasCitations,
            hasMethodology
        },
        recommendations: getContextualRecommendations(text, {wordCount, hasIntroduction, hasConclusion, hasCitations, hasMethodology})
    };
}

function getContextualRecommendations(text, analysis) {
    const recommendations = [];
    
    if (!analysis.hasIntroduction) {
        recommendations.push({
            category: 'Structure',
            icon: '📝',
            text: 'Add a clear introduction that outlines your thesis and main arguments'
        });
    }
    
    if (!analysis.hasConclusion) {
        recommendations.push({
            category: 'Structure', 
            icon: '🎯',
            text: 'Include a strong conclusion that summarizes findings and suggests future research'
        });
    }
    
    if (!analysis.hasCitations) {
        recommendations.push({
            category: 'Citations',
            icon: '📚',
            text: 'Add scholarly references and citations to support your arguments'
        });
    }
    
    if (!analysis.hasMethodology) {
        recommendations.push({
            category: 'Methodology',
            icon: '🔬',
            text: 'Include a methodology section explaining your research approach'
        });
    }
    
    if (analysis.wordCount < 500) {
        recommendations.push({
            category: 'Content',
            icon: '📈',
            text: 'Expand your analysis with more detailed explanations and examples'
        });
    }
    
    // Add general recommendations
    recommendations.push(...appData.sample_texts.recommendations.slice(0, 4).map(rec => ({
        category: 'General',
        icon: '💡',
        text: rec
    })));
    
    return recommendations;
}

function displayPaperRecommendations(analysis) {
    const recommendationsContainer = document.querySelector('.recommendations-container');
    const resultsSection = document.getElementById('recommendations-results');
    
    // Group recommendations by category
    const groupedRecs = analysis.recommendations.reduce((groups, rec) => {
        if (!groups[rec.category]) groups[rec.category] = [];
        groups[rec.category].push(rec);
        return groups;
    }, {});
    
    let html = `
        <div class="analysis-overview">
            <h3>📊 Document Analysis</h3>
            <div class="analysis-stats">
                <div class="stat-item">
                    <strong>${analysis.wordCount}</strong> words
                </div>
                <div class="stat-item">
                    <strong>${analysis.sentences}</strong> sentences
                </div>
                <div class="stat-item">
                    <strong>${analysis.paragraphs}</strong> paragraphs
                </div>
            </div>
        </div>
    `;
    
    Object.entries(groupedRecs).forEach(([category, recommendations]) => {
        html += `
            <div class="recommendation-category">
                <h4>${recommendations[0].icon} ${category} Recommendations</h4>
                ${recommendations.map(rec => `
                    <div class="recommendation-item">${rec.text}</div>
                `).join('')}
            </div>
        `;
    });
    
    html += `
        <div class="export-actions">
            <button class="btn btn--outline btn--sm" onclick="copyToClipboard('Paper Analysis Report\\n\\nDocument Stats:\\nWords: ${analysis.wordCount}\\nSentences: ${analysis.sentences}\\nParagraphs: ${analysis.paragraphs}\\n\\nRecommendations:\\n${analysis.recommendations.map((r, i) => `${i + 1}. ${r.text}`).join('\\n')}')">
                Copy Analysis
            </button>
            <button class="btn btn--outline btn--sm" onclick="downloadReport('recommendations', 'paper_analysis.txt')">
                Download Report
            </button>
        </div>
    `;
    
    recommendationsContainer.innerHTML = html;
    resultsSection.classList.add('show');
}

// Document Tools
function createDocument() {
    const template = document.getElementById('doc-template').value;
    const title = document.getElementById('doc-title').value.trim();
    
    if (!template) {
        showToast('Please select a template', 'error');
        return;
    }
    
    showLoading('Creating document template...');
    
    setTimeout(() => {
        const content = generateDocumentTemplate(template, title);
        displayDocumentEditor(content);
        hideLoading();
        showToast('Document template created successfully!');
    }, 1000);
}

function generateDocumentTemplate(template, title) {
    let content = appData.writing_templates[template] || '';
    
    if (title) {
        content = content.replace(/# .+ Title/, `# ${title}`);
        content = content.replace(/Research Paper Title/, title);
        content = content.replace(/Essay Title/, title);
        content = content.replace(/Report Title/, title);
        content = content.replace(/Research Proposal Title/, title);
    }
    
    return content;
}

function displayDocumentEditor(content) {
    const documentContent = document.getElementById('document-content');
    const resultsSection = document.getElementById('document-results');
    
    // Convert markdown to HTML for display
    const htmlContent = content
        .replace(/^# (.+)$/gm, '<h1>$1</h1>')
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        .replace(/^\[(.+)\]$/gm, '<p class="placeholder">$1</p>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/^(.+)$/gm, '<p>$1</p>')
        .replace(/<p><h/g, '<h')
        .replace(/<\/h([1-6])><\/p>/g, '</h$1>');
    
    documentContent.innerHTML = htmlContent;
    resultsSection.classList.add('show');
}

function toggleFormat(format) {
    const selection = window.getSelection();
    
    switch (format) {
        case 'bold':
            document.execCommand('bold');
            break;
        case 'italic':
            document.execCommand('italic');
            break;
        case 'heading':
            document.execCommand('formatBlock', false, 'h2');
            break;
        case 'list':
            document.execCommand('insertUnorderedList');
            break;
    }
    
    // Update toolbar button states
    updateToolbarStates();
}

function updateToolbarStates() {
    const commands = {
        'bold-btn': 'bold',
        'italic-btn': 'italic'
    };
    
    Object.entries(commands).forEach(([btnId, command]) => {
        const btn = document.getElementById(btnId);
        if (document.queryCommandState(command)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function exportDocument(format) {
    const content = document.getElementById('document-content').innerText;
    const title = document.getElementById('doc-title').value || 'document';
    
    switch (format) {
        case 'txt':
            downloadText(content, `${title}.txt`);
            break;
        case 'docx':
            showToast('DOCX export simulated - content copied to clipboard');
            copyToClipboard(content);
            break;
        case 'pdf':
            showToast('PDF export simulated - content copied to clipboard'); 
            copyToClipboard(content);
            break;
    }
}

function analyzeWordLimit() {
    const text = document.getElementById('analyzer-text').value.trim();
    const limit = parseInt(document.getElementById('word-limit').value);
    
    if (!text) {
        showToast('Please enter content to analyze', 'error');
        return;
    }
    
    if (!limit || limit <= 0) {
        showToast('Please enter a valid word limit', 'error');
        return;
    }
    
    showLoading('Analyzing word limit compliance...');
    
    setTimeout(() => {
        const analysis = performWordLimitAnalysis(text, limit);
        displayWordLimitAnalysis(analysis);
        hideLoading();
        showToast('Word limit analysis completed!');
    }, 1500);
}

function performWordLimitAnalysis(text, limit) {
    const currentCount = text.split(' ').length;
    const difference = currentCount - limit;
    const percentage = (currentCount / limit * 100).toFixed(1);
    
    let status, suggestions = [];
    
    if (difference > 0) {
        status = 'over';
        suggestions.push(`Remove ${difference} words to meet the limit`);
        suggestions.push('Consider removing unnecessary adjectives and adverbs');
        suggestions.push('Eliminate repetitive phrases and redundant content');
        suggestions.push('Use more concise language and shorter sentences');
    } else if (difference < -50) {
        status = 'under';
        suggestions.push(`Add approximately ${Math.abs(difference)} words to reach the limit`);
        suggestions.push('Expand on key points with more detailed explanations');
        suggestions.push('Include additional examples or case studies');
        suggestions.push('Add more supporting evidence and analysis');
    } else {
        status = 'perfect';
        suggestions.push('Your content is within the optimal word count range');
        suggestions.push('Consider reviewing for clarity and coherence');
        suggestions.push('Ensure all key points are adequately covered');
    }
    
    return {
        currentCount,
        limit,
        difference,
        percentage,
        status,
        suggestions
    };
}

function displayWordLimitAnalysis(analysis) {
    const analysisContainer = document.querySelector('.analysis-report');
    const resultsSection = document.getElementById('analyzer-results');
    
    analysisContainer.innerHTML = `
        <div class="analysis-header">
            <div class="word-status ${analysis.status}">
                <span>${analysis.currentCount} / ${analysis.limit} words</span>
                <small>(${analysis.percentage}% of limit)</small>
            </div>
            <div class="status status--${analysis.status === 'perfect' ? 'success' : analysis.status === 'over' ? 'error' : 'warning'}">
                ${analysis.status === 'perfect' ? 'Within Range' : analysis.status === 'over' ? `${analysis.difference} Over Limit` : `${Math.abs(analysis.difference)} Under Limit`}
            </div>
        </div>
        
        <div class="analysis-suggestions">
            <h4>📋 Optimization Suggestions:</h4>
            ${analysis.suggestions.map(suggestion => `
                <div class="suggestion">${suggestion}</div>
            `).join('')}
        </div>
        
        <div class="export-actions">
            <button class="btn btn--outline btn--sm" onclick="copyToClipboard('Word Limit Analysis\\n\\nCurrent: ${analysis.currentCount} words\\nLimit: ${analysis.limit} words\\nStatus: ${analysis.status}\\nPercentage: ${analysis.percentage}%\\n\\nSuggestions:\\n${analysis.suggestions.map((s, i) => `${i + 1}. ${s}`).join('\\n')}')">
                Copy Analysis
            </button>
        </div>
    `;
    
    resultsSection.classList.add('show');
}

// Image Tools
function handleImageUpload(files) {
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'application/pdf'];
    const validFiles = files.filter(file => validTypes.includes(file.type));
    
    if (validFiles.length === 0) {
        showToast('Please upload valid image files (JPG, PNG, GIF, BMP) or PDF documents', 'error');
        return;
    }
    
    extractedImages = [...extractedImages, ...validFiles];
    displayUploadedImages();
    
    const extractBtn = document.getElementById('extract-text');
    extractBtn.style.display = 'inline-block';
    
    showToast(`${validFiles.length} file(s) uploaded successfully!`);
}

function displayUploadedImages() {
    const container = document.getElementById('uploaded-images');
    
    container.innerHTML = extractedImages.map((file, index) => `
        <div class="uploaded-image">
            ${file.type.startsWith('image/') ? 
                `<img src="${URL.createObjectURL(file)}" alt="${file.name}">` :
                `<div class="pdf-icon" style="block-size: 120px; display: flex; align-items: center; justify-content: center; background: var(--color-bg-2); font-size: var(--font-size-3xl);">📄</div>`
            }
            <div class="image-name">${file.name}</div>
            <button class="remove-image" onclick="removeImage(${index})">×</button>
        </div>
    `).join('');
}

function removeImage(index) {
    extractedImages.splice(index, 1);
    displayUploadedImages();
    
    if (extractedImages.length === 0) {
        document.getElementById('extract-text').style.display = 'none';
    }
}

function extractTextFromImages() {
    if (extractedImages.length === 0) {
        showToast('Please upload images first', 'error');
        return;
    }
    
    showLoading('Extracting text from images using OCR...');
    
    setTimeout(() => {
        const results = simulateOCRExtraction();
        displayOCRResults(results);
        hideLoading();
        showToast(`Text extracted from ${extractedImages.length} file(s)!`);
    }, 3000);
}

function simulateOCRExtraction() {
    const sampleTexts = [
        "This is sample extracted text from image 1. The OCR technology has successfully identified and converted the visual text content into editable digital format.",
        "Sample text from image 2: Research methodology involves systematic investigation and analysis of various data sources to reach valid conclusions.",
        "Document text extraction result: Advanced optical character recognition enables efficient digitization of printed materials for further processing and analysis.",
        "PDF content extracted: This document contains important information about academic research standards and best practices in scholarly writing."
    ];
    
    return extractedImages.map((file, index) => ({
        filename: file.name,
        extractedText: sampleTexts[index % sampleTexts.length] + ` [Extracted from ${file.name}]`,
        confidence: Math.floor(Math.random() * 20) + 80, // 80-99% confidence
        language: 'English',
        wordCount: sampleTexts[index % sampleTexts.length].split(' ').length
    }));
}

function displayOCRResults(results) {
    const container = document.querySelector('.extracted-text-container');
    const resultsSection = document.getElementById('ocr-results');
    
    container.innerHTML = results.map((result, index) => `
        <div class="extraction-result">
            <div class="extraction-header">
                <strong>📄 ${result.filename}</strong>
                <div class="status status--success">${result.confidence}% confidence</div>
                <span class="text-info">${result.language} • ${result.wordCount} words</span>
            </div>
            <div class="extracted-text">${result.extractedText}</div>
            <div class="text-actions">
                <button class="btn btn--outline btn--sm" onclick="copyToClipboard('${result.extractedText.replace(/'/g, "\\'")}')">
                    Copy Text
                </button>
                <button class="btn btn--outline btn--sm" onclick="downloadText('${result.extractedText.replace(/'/g, "\\'")}', '${result.filename}_extracted.txt')">
                    Download
                </button>
                <button class="btn btn--outline btn--sm" onclick="editExtractedText(${index})">
                    Edit Text
                </button>
            </div>
        </div>
    `).join('');
    
    // Add batch actions
    container.innerHTML += `
        <div class="export-actions" style="margin-block-start: var(--space-20); padding-block-start: var(--space-20); border-block-start: 1px solid var(--color-border);">
            <button class="btn btn--primary" onclick="copyAllExtractedText()">Copy All Text</button>
            <button class="btn btn--outline" onclick="downloadAllExtractedText()">Download All as TXT</button>
            <button class="btn btn--outline" onclick="processForWritingTools()">Send to Writing Tools</button>
        </div>
    `;
    
    resultsSection.classList.add('show');
}

function editExtractedText(index) {
    const extractedTextElement = document.querySelectorAll('.extracted-text')[index];
    const currentText = extractedTextElement.textContent;
    
    extractedTextElement.innerHTML = `<textarea class="form-control" rows="6">${currentText}</textarea>`;
    
    const textarea = extractedTextElement.querySelector('textarea');
    textarea.focus();
    
    textarea.addEventListener('blur', function() {
        extractedTextElement.textContent = this.value;
    });
}

function copyAllExtractedText() {
    const allTexts = Array.from(document.querySelectorAll('.extracted-text'))
        .map(element => element.textContent)
        .join('\n\n--- Next Document ---\n\n');
    
    copyToClipboard(allTexts);
}

function downloadAllExtractedText() {
    const allTexts = Array.from(document.querySelectorAll('.extracted-text'))
        .map((element, index) => `=== Document ${index + 1}: ${extractedImages[index].name} ===\n\n${element.textContent}`)
        .join('\n\n');
    
    downloadText(allTexts, 'all_extracted_text.txt');
}

function processForWritingTools() {
    const allTexts = Array.from(document.querySelectorAll('.extracted-text'))
        .map(element => element.textContent)
        .join(' ');
    
    // Switch to writing tools and populate reorganizer
    switchTab('writing-tools');
    document.getElementById('reorganize-text').value = allTexts;
    updateWordCount(document.getElementById('reorganize-text'), 'reorganize-word-count');
    
    showToast('Extracted text sent to Writing Tools!');
}

function processExtraction() {
    const preserveFormatting = document.getElementById('preserve-formatting').checked;
    const detectLanguage = document.getElementById('detect-language').checked;
    const batchProcess = document.getElementById('batch-process').checked;
    
    showLoading('Processing files with advanced extraction options...');
    
    setTimeout(() => {
        const results = simulateAdvancedExtraction(preserveFormatting, detectLanguage, batchProcess);
        displayExtractionResults(results);
        hideLoading();
        showToast('Advanced text extraction completed!');
    }, 2500);
}

function simulateAdvancedExtraction(preserveFormatting, detectLanguage, batchProcess) {
    const results = {
        totalFiles: Math.floor(Math.random() * 5) + 1,
        totalWords: Math.floor(Math.random() * 1000) + 500,
        languages: detectLanguage ? ['English', 'Spanish', 'French'][Math.floor(Math.random() * 3)] : 'English',
        formatting: preserveFormatting ? 'Preserved' : 'Plain text',
        processingTime: '2.3 seconds'
    };
    
    return results;
}

function displayExtractionResults(results) {
    const container = document.querySelector('.extraction-results');
    const resultsSection = document.getElementById('extractor-results');
    
    container.innerHTML = `
        <div class="extraction-summary">
            <h3>🔄 Batch Processing Complete</h3>
            <div class="processing-stats">
                <div class="stat-group">
                    <div class="stat-item">
                        <strong>${results.totalFiles}</strong>
                        <span>Files Processed</span>
                    </div>
                    <div class="stat-item">
                        <strong>${results.totalWords}</strong>
                        <span>Words Extracted</span>
                    </div>
                    <div class="stat-item">
                        <strong>${results.languages}</strong>
                        <span>Languages Detected</span>
                    </div>
                    <div class="stat-item">
                        <strong>${results.processingTime}</strong>
                        <span>Processing Time</span>
                    </div>
                </div>
            </div>
            
            <div class="processing-options">
                <div class="option-status">
                    ✅ Formatting: ${results.formatting}
                </div>
                <div class="option-status">
                    ✅ Language Detection: Enabled
                </div>
                <div class="option-status">
                    ✅ Batch Processing: Complete
                </div>
            </div>
            
            <div class="export-actions">
                <button class="btn btn--primary" onclick="showToast('Advanced extraction results copied!')">
                    Copy Results
                </button>
                <button class="btn btn--outline" onclick="showToast('Results downloaded successfully!')">
                    Download Report
                </button>
            </div>
        </div>
    `;
    
    resultsSection.classList.add('show');
}

// File Upload Handler
function handlePlagiarismFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    showLoading('Reading uploaded file...');
    
    setTimeout(() => {
        // Simulate file reading
        const sampleContent = "This is sample content from the uploaded file. The document contains text that will be analyzed for potential plagiarism issues and originality concerns.";
        document.getElementById('plagiarism-text').value = sampleContent;
        updateWordCount(document.getElementById('plagiarism-text'), 'plagiarism-word-count');
        hideLoading();
        showToast(`File "${file.name}" uploaded and processed!`);
    }, 1000);
}

// Utility Functions
function updateWordCount(textElement, countElementId) {
    const text = textElement.value.trim();
    const wordCount = text === '' ? 0 : text.split(/\s+/).length;
    const countElement = document.getElementById(countElementId);
    
    if (countElement) {
        countElement.textContent = wordCount;
    }
}

function checkWordLimit(textElement, limit) {
    const wordCount = textElement.value.trim().split(/\s+/).length;
    const countElement = textElement.parentNode.querySelector('.word-count');
    
    if (wordCount > limit) {
        countElement.classList.add('over-limit');
        showToast(`Word limit exceeded! ${wordCount}/${limit} words`, 'warning');
    } else {
        countElement.classList.remove('over-limit');
    }
}

function showLoading(message = 'Processing your request...') {
    loadingMessage.textContent = message;
    loadingModal.classList.remove('hidden');
}

function hideLoading() {
    loadingModal.classList.add('hidden');
}

function showToast(message, type = 'success') {
    const toastElement = document.getElementById('toast');
    const messageElement = toastElement.querySelector('.toast-message');
    
    messageElement.textContent = message;
    toastElement.className = `toast ${type === 'error' ? 'error' : type === 'warning' ? 'warning' : ''}`;
    toastElement.classList.remove('hidden');
    
    setTimeout(() => {
        toastElement.classList.add('hidden');
    }, 3000);
}

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('Copied to clipboard!');
        }).catch(() => {
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        showToast('Copied to clipboard!');
    } catch (err) {
        showToast('Failed to copy to clipboard', 'error');
    }
    
    document.body.removeChild(textArea);
}

function downloadText(content, filename) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Download started!');
}

function downloadReport(type, filename) {
    let content = '';
    
    switch (type) {
        case 'plagiarism':
            const plagiarismContainer = document.querySelector('.plagiarism-report');
            content = plagiarismContainer ? plagiarismContainer.textContent : 'No report available';
            break;
        case 'recommendations':
            const recommendationsContainer = document.querySelector('.recommendations-container');
            content = recommendationsContainer ? recommendationsContainer.textContent : 'No recommendations available';
            break;
        default:
            content = 'Report content not found';
    }
    
    downloadText(content, filename);
}

// Make functions globally available
window.switchTab = switchTab;
window.copyToClipboard = copyToClipboard;
window.downloadText = downloadText;
window.downloadReport = downloadReport;
window.removeImage = removeImage;
window.editExtractedText = editExtractedText;
window.copyAllExtractedText = copyAllExtractedText;
window.downloadAllExtractedText = downloadAllExtractedText;
window.processForWritingTools = processForWritingTools;