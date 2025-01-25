// Dynamic content handling
const dynamicContent = {
    // Store page data
    pages: {
        stories: [
            {
                id: 'sarahs-journey',
                title: "Sarah's Educational Journey",
                author: 'Hope Foundation Team',
                date: 'January 15, 2024',
                preview: 'Through our education program, Sarah was able to complete her schooling and is now pursuing her dream of becoming a teacher.',
                fullContent: `
                    <p>Sarah's story is a testament to the transformative power of education and determination. Coming from a humble background in a rural village, Sarah faced numerous challenges in pursuing her education. Her family's financial constraints and the lack of proper educational facilities in her area were significant obstacles.</p>

                    <h3>The Beginning</h3>
                    <p>When we first met Sarah in 2021, she was at risk of dropping out of school due to financial difficulties. Despite being an excellent student, her family's economic situation made it increasingly difficult to continue her education.</p>

                    <h3>Our Intervention</h3>
                    <p>Through our education program, we provided Sarah with:</p>
                    <ul>
                        <li>Full scholarship covering tuition and books</li>
                        <li>Regular mentoring and guidance</li>
                        <li>Access to our digital learning resources</li>
                        <li>Transportation support to reach school</li>
                    </ul>

                    <h3>The Transformation</h3>
                    <p>With the right support and her unwavering determination, Sarah:</p>
                    <ul>
                        <li>Graduated high school with distinction</li>
                        <li>Secured admission in a prestigious teaching college</li>
                        <li>Became a role model for other girls in her community</li>
                        <li>Started tutoring younger students in her spare time</li>
                    </ul>

                    <h3>Looking Forward</h3>
                    <p>Today, Sarah is pursuing her Bachelor's in Education and is determined to return to her village as a qualified teacher. She wants to ensure that other children from her community have access to quality education and mentorship.</p>

                    <blockquote class="blockquote">
                        <p>"Education is not just about learning; it's about breaking barriers and creating opportunities for others. I want to be that change-maker in my community."</p>
                        <footer class="blockquote-footer">Sarah</footer>
                    </blockquote>`,
                image: 'images/Sarah Educational Journey.webp'
            },
            {
                id: 'community-health',
                title: 'Community Health Initiative',
                author: 'Medical Team',
                date: 'December 10, 2023',
                preview: 'How our mobile health clinic transformed healthcare access for a remote village, serving over 500 residents monthly.',
                fullContent: `
                    <p>Access to healthcare is a fundamental right, yet many remote villages in our region struggle with basic medical facilities. Our Community Health Initiative has brought about a remarkable transformation in healthcare accessibility for one such village.</p>

                    <h3>The Challenge</h3>
                    <p>The village faced several healthcare challenges:</p>
                    <ul>
                        <li>Nearest hospital was 50 kilometers away</li>
                        <li>No regular medical checkups</li>
                        <li>High prevalence of preventable diseases</li>
                        <li>Limited awareness about health and hygiene</li>
                    </ul>

                    <h3>Our Solution</h3>
                    <p>We implemented a comprehensive healthcare program:</p>
                    <ul>
                        <li>Weekly mobile health clinic visits</li>
                        <li>Regular health camps and checkups</li>
                        <li>Health education workshops</li>
                        <li>Emergency medical support system</li>
                    </ul>

                    <h3>Impact</h3>
                    <p>The initiative has created significant impact:</p>
                    <ul>
                        <li>Over 500 residents receive medical care monthly</li>
                        <li>80% reduction in preventable diseases</li>
                        <li>100% vaccination coverage for children</li>
                        <li>Improved maternal health care</li>
                    </ul>

                    <h3>Sustainability</h3>
                    <p>We've trained local health workers to ensure the program's sustainability and continuous community support.</p>`,
                image: 'images/Community Health Initiative.jpg'
            },
            {
                id: 'entrepreneur-story',
                title: 'Empowering Local Entrepreneurs',
                author: 'Skills Development Team',
                date: 'November 20, 2023',
                preview: 'Meet John, who started his own business after completing our skills training program and now employs 10 people.',
                fullContent: `
                    <p>John's entrepreneurial journey is a prime example of how skills training and mentorship can transform lives and create ripple effects in the community. From being unemployed to becoming a successful business owner, his story inspires many.</p>

                    <h3>The Beginning</h3>
                    <p>Before joining our program, John was:</p>
                    <ul>
                        <li>Struggling to find stable employment</li>
                        <li>Supporting a family of five</li>
                        <li>Looking for opportunities to learn new skills</li>
                    </ul>

                    <h3>The Training</h3>
                    <p>Through our skills development program, John received:</p>
                    <ul>
                        <li>Three months of intensive technical training</li>
                        <li>Business management education</li>
                        <li>Financial literacy workshops</li>
                        <li>Mentorship from successful entrepreneurs</li>
                    </ul>

                    <h3>The Success</h3>
                    <p>Today, John's achievements include:</p>
                    <ul>
                        <li>Operating a successful small business</li>
                        <li>Employing 10 local community members</li>
                        <li>Monthly revenue of over $15,000</li>
                        <li>Mentoring new entrepreneurs</li>
                    </ul>

                    <blockquote class="blockquote">
                        <p>"The skills and confidence I gained through this program changed not just my life, but the lives of my employees and their families too."</p>
                        <footer class="blockquote-footer">John</footer>
                    </blockquote>`,
                image: 'images/Empowering Local Entrepreneurs.jpeg'
            }
        ]
    },

    // Load detail page content
    loadDetailPage: function(type, id) {
        const item = this.pages[type].find(item => item.id === id);
        if (!item) return;

        // Create detail page content
        const content = `
            <div class="site-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <div class="blog-single-content">
                                <h2 class="text-black mb-4">${item.title}</h2>
                                <div class="meta mb-4">
                                    <span class="mr-2"><i class="far fa-calendar-alt"></i> ${item.date}</span>
                                    <span><i class="far fa-user"></i> By ${item.author}</span>
                                </div>
                                <img src="${item.image}" alt="${item.title}" class="img-fluid mb-4 rounded">
                                <div class="content">
                                    ${item.fullContent}
                                </div>
                                
                                <!-- Back button -->
                                <div class="mt-5">
                                    <a href="#success-stories-section" class="btn btn-primary" onclick="window.location.reload()">
                                        <i class="fas fa-arrow-left"></i> Back to Success Stories
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Update page content
        document.getElementById('main-content').innerHTML = content;
        window.scrollTo(0, 0);
    },

    // Initialize dynamic content handlers
    init: function() {
        // Add click handlers to all detail links
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-detail-type][data-detail-id]')) {
                e.preventDefault();
                const type = e.target.getAttribute('data-detail-type');
                const id = e.target.getAttribute('data-detail-id');
                this.loadDetailPage(type, id);
            }
        });
    }
};

// Initialize when document is ready
document.addEventListener('DOMContentLoaded', () => {
    dynamicContent.init();
});
