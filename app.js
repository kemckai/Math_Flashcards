// Flash Card Application
class FlashCardApp {
    constructor() {
        this.allCards = [...mathFlashCards];
        this.filteredCards = [...mathFlashCards];
        this.currentIndex = 0;
        this.isFlipped = false;
        this.exampleVisible = false;
        
        this.initializeElements();
        this.populateCategoryFilter();
        this.setupEventListeners();
        this.displayCard();
        this.updateStats();
    }

    initializeElements() {
        this.flashcard = document.getElementById('flashcard');
        this.questionText = document.getElementById('question-text');
        this.answerText = document.getElementById('answer-text');
        this.categoryBadge = document.querySelectorAll('.category-badge');
        this.cardCounter = document.getElementById('card-counter');
        this.categoryName = document.getElementById('category-name');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.flipBtn = document.getElementById('flip-btn');
        this.exampleBtn = document.getElementById('example-btn');
        this.exampleSection = document.getElementById('example-section');
        this.exampleText = document.getElementById('example-text');
        this.categorySelect = document.getElementById('category-select');
        this.totalCardsSpan = document.getElementById('total-cards');
        this.currentCategorySpan = document.getElementById('current-category');
    }

    populateCategoryFilter() {
        const categories = [...new Set(this.allCards.map(card => card.category))];
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            this.categorySelect.appendChild(option);
        });
    }

    setupEventListeners() {
        // Card flip
        this.flipBtn.addEventListener('click', () => this.flipCard());
        this.flashcard.addEventListener('click', () => this.flipCard());

        // Navigation
        this.prevBtn.addEventListener('click', () => this.previousCard());
        this.nextBtn.addEventListener('click', () => this.nextCard());

        // Example button
        this.exampleBtn.addEventListener('click', () => this.showExample());

        // Category filter
        this.categorySelect.addEventListener('change', (e) => this.filterByCategory(e.target.value));

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previousCard();
            if (e.key === 'ArrowRight') this.nextCard();
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                this.flipCard();
            }
        });
    }

    filterByCategory(category) {
        if (category === 'all') {
            this.filteredCards = [...this.allCards];
        } else {
            this.filteredCards = this.allCards.filter(card => card.category === category);
        }
        
        if (this.filteredCards.length === 0) {
            this.filteredCards = [...this.allCards];
            this.categorySelect.value = 'all';
            alert('No cards found in this category. Showing all cards.');
        }
        
        this.currentIndex = 0;
        this.isFlipped = false;
        this.displayCard();
        this.updateStats();
    }

    displayCard() {
        if (this.filteredCards.length === 0) return;

        const card = this.filteredCards[this.currentIndex];
        
        // Reset flip state
        if (this.isFlipped) {
            this.flashcard.classList.remove('flipped');
            this.isFlipped = false;
        }

        // Hide example section when navigating
        if (this.exampleVisible) {
            this.hideExample();
        }

        // Update content
        this.questionText.textContent = card.question;
        this.answerText.textContent = card.answer;
        
        // Update category badges
        this.categoryBadge.forEach(badge => {
            badge.textContent = card.category;
        });

        // Update counter
        this.cardCounter.textContent = `Card ${this.currentIndex + 1} of ${this.filteredCards.length}`;
        this.categoryName.textContent = card.category;

        // Update button states
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex === this.filteredCards.length - 1;

        // Render MathJax
        if (window.MathJax) {
            MathJax.typesetPromise([this.questionText, this.answerText]).catch((err) => {
                console.log('MathJax rendering error:', err);
            });
        }
    }

    flipCard() {
        this.isFlipped = !this.isFlipped;
        this.flashcard.classList.toggle('flipped', this.isFlipped);
    }

    previousCard() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.displayCard();
        }
    }

    nextCard() {
        if (this.currentIndex < this.filteredCards.length - 1) {
            this.currentIndex++;
            this.displayCard();
        }
    }

    updateStats() {
        this.totalCardsSpan.textContent = this.filteredCards.length;
        const currentCard = this.filteredCards[this.currentIndex];
        this.currentCategorySpan.textContent = currentCard ? currentCard.category : '-';
    }

    generateExample() {
        if (this.filteredCards.length === 0) return '';
        
        const card = this.filteredCards[this.currentIndex];
        const category = card.category;
        const question = card.question.toLowerCase();

        // Linear Equations & Forms
        if (category === 'Linear Equations & Forms') {
            if (question.includes('slope formula')) {
                return `<p><strong>Example:</strong> Find the slope of the line passing through points $(2, 3)$ and $(5, 9)$.</p>
                    <div class="step"><span class="step-label">Step 1:</span> Identify the points: $(x_1, y_1) = (2, 3)$ and $(x_2, y_2) = (5, 9)$</div>
                    <div class="step"><span class="step-label">Step 2:</span> Apply the slope formula: $m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{9 - 3}{5 - 2} = \\frac{6}{3} = 2$</div>
                    <p><strong>Answer:</strong> The slope is $m = 2$</p>`;
            } else if (question.includes('slope-intercept')) {
                return `<p><strong>Example:</strong> Write the equation of a line with slope $m = 3$ and y-intercept $b = -2$.</p>
                    <div class="step"><span class="step-label">Step 1:</span> Use the slope-intercept form: $y = mx + b$</div>
                    <div class="step"><span class="step-label">Step 2:</span> Substitute $m = 3$ and $b = -2$: $y = 3x - 2$</div>
                    <p><strong>Answer:</strong> $y = 3x - 2$</p>`;
            } else {
                return `<p><strong>Example:</strong> Convert $y = 2x + 5$ to standard form.</p>
                    <div class="step"><span class="step-label">Step 1:</span> Start with slope-intercept form: $y = 2x + 5$</div>
                    <div class="step"><span class="step-label">Step 2:</span> Subtract $2x$ from both sides: $-2x + y = 5$</div>
                    <div class="step"><span class="step-label">Step 3:</span> Multiply by $-1$ to make $A$ positive: $2x - y = -5$</div>
                    <p><strong>Answer:</strong> $2x - y = -5$ (or $-2x + y = 5$)</p>`;
            }
        }

        // Quadratic Equations
        if (category === 'Quadratic Equations') {
            if (question.includes('quadratic formula')) {
                return `<p><strong>Example:</strong> Solve $x^2 - 5x + 6 = 0$ using the quadratic formula.</p>
                    <div class="step"><span class="step-label">Step 1:</span> Identify $a = 1$, $b = -5$, $c = 6$</div>
                    <div class="step"><span class="step-label">Step 2:</span> Apply the formula: $x = \\frac{-(-5) \\pm \\sqrt{(-5)^2 - 4(1)(6)}}{2(1)}$</div>
                    <div class="step"><span class="step-label">Step 3:</span> Simplify: $x = \\frac{5 \\pm \\sqrt{25 - 24}}{2} = \\frac{5 \\pm 1}{2}$</div>
                    <div class="step"><span class="step-label">Step 4:</span> $x = \\frac{5 + 1}{2} = 3$ or $x = \\frac{5 - 1}{2} = 2$</div>
                    <p><strong>Answer:</strong> $x = 2$ or $x = 3$</p>`;
            } else if (question.includes('vertex')) {
                return `<p><strong>Example:</strong> Find the vertex of $y = 2x^2 - 8x + 5$.</p>
                    <div class="step"><span class="step-label">Step 1:</span> Identify $a = 2$, $b = -8$</div>
                    <div class="step"><span class="step-label">Step 2:</span> Find x-coordinate: $x = \\frac{-(-8)}{2(2)} = \\frac{8}{4} = 2$</div>
                    <div class="step"><span class="step-label">Step 3:</span> Find y-coordinate: $y = 2(2)^2 - 8(2) + 5 = 8 - 16 + 5 = -3$</div>
                    <p><strong>Answer:</strong> Vertex at $(2, -3)$</p>`;
            } else {
                return `<p><strong>Example:</strong> Factor $x^2 - 9$ using difference of squares.</p>
                    <div class="step"><span class="step-label">Step 1:</span> Recognize $x^2 - 9 = x^2 - 3^2$</div>
                    <div class="step"><span class="step-label">Step 2:</span> Apply formula: $a^2 - b^2 = (a - b)(a + b)$</div>
                    <div class="step"><span class="step-label">Step 3:</span> $x^2 - 9 = (x - 3)(x + 3)$</div>
                    <p><strong>Answer:</strong> $(x - 3)(x + 3)$</p>`;
            }
        }

        // Functions - Basics
        if (category === 'Functions - Basics') {
            if (question.includes('f(2)')) {
                return `<p><strong>Example:</strong> If $f(x) = 3x + 5$, find $f(2)$.</p>
                    <div class="step"><span class="step-label">Step 1:</span> Substitute $x = 2$ into the function</div>
                    <div class="step"><span class="step-label">Step 2:</span> $f(2) = 3(2) + 5 = 6 + 5 = 11$</div>
                    <p><strong>Answer:</strong> $f(2) = 11$</p>`;
            } else if (question.includes('zeros')) {
                return `<p><strong>Example:</strong> Find the zeros of $f(x) = x^2 - 4x + 3$.</p>
                    <div class="step"><span class="step-label">Step 1:</span> Set $f(x) = 0$: $x^2 - 4x + 3 = 0$</div>
                    <div class="step"><span class="step-label">Step 2:</span> Factor: $(x - 1)(x - 3) = 0$</div>
                    <div class="step"><span class="step-label">Step 3:</span> Solve: $x = 1$ or $x = 3$</div>
                    <p><strong>Answer:</strong> Zeros at $x = 1$ and $x = 3$</p>`;
            } else {
                return `<p><strong>Example:</strong> Evaluate $f(3)$ if $f(x) = 2x^2 - x + 1$.</p>
                    <div class="step"><span class="step-label">Step 1:</span> Substitute $x = 3$: $f(3) = 2(3)^2 - 3 + 1$</div>
                    <div class="step"><span class="step-label">Step 2:</span> Calculate: $f(3) = 2(9) - 3 + 1 = 18 - 3 + 1 = 16$</div>
                    <p><strong>Answer:</strong> $f(3) = 16$</p>`;
            }
        }

        // Inequalities
        if (category === 'Inequalities') {
            return `<p><strong>Example:</strong> Solve $3x - 5 < 7$.</p>
                <div class="step"><span class="step-label">Step 1:</span> Add 5 to both sides: $3x < 12$</div>
                <div class="step"><span class="step-label">Step 2:</span> Divide by 3: $x < 4$</div>
                <div class="step"><span class="step-label">Step 3:</span> Graph: Open circle at 4, shade left</div>
                <p><strong>Answer:</strong> $x < 4$</p>`;
        }

        // Compound Inequalities
        if (category === 'Compound Inequalities') {
            return `<p><strong>Example:</strong> Solve $-2 < 3x + 1 < 7$.</p>
                <div class="step"><span class="step-label">Step 1:</span> Subtract 1 from all parts: $-3 < 3x < 6$</div>
                <div class="step"><span class="step-label">Step 2:</span> Divide all parts by 3: $-1 < x < 2$</div>
                <p><strong>Answer:</strong> $-1 < x < 2$</p>`;
        }

        // Temperature Conversions
        if (category === 'Temperature Conversions') {
            if (question.includes('celsius to fahrenheit')) {
                return `<p><strong>Example:</strong> Convert $25°C$ to Fahrenheit.</p>
                    <div class="step"><span class="step-label">Step 1:</span> Use formula: $°F = (°C \\times \\frac{9}{5}) + 32$</div>
                    <div class="step"><span class="step-label">Step 2:</span> Substitute: $°F = (25 \\times \\frac{9}{5}) + 32 = 45 + 32 = 77$</div>
                    <p><strong>Answer:</strong> $25°C = 77°F$</p>`;
            } else {
                return `<p><strong>Example:</strong> Convert $68°F$ to Celsius.</p>
                    <div class="step"><span class="step-label">Step 1:</span> Use formula: $°C = (°F - 32) \\times \\frac{5}{9}$</div>
                    <div class="step"><span class="step-label">Step 2:</span> Substitute: $°C = (68 - 32) \\times \\frac{5}{9} = 36 \\times \\frac{5}{9} = 20$</div>
                    <p><strong>Answer:</strong> $68°F = 20°C$</p>`;
            }
        }

        // Square Roots
        if (category === 'Square Roots') {
            if (question.includes('simplify')) {
                return `<p><strong>Example:</strong> Simplify $\\sqrt{72}$.</p>
                    <div class="step"><span class="step-label">Step 1:</span> Factor: $\\sqrt{72} = \\sqrt{36 \\times 2}$</div>
                    <div class="step"><span class="step-label">Step 2:</span> Split: $\\sqrt{36} \\times \\sqrt{2} = 6\\sqrt{2}$</div>
                    <p><strong>Answer:</strong> $6\\sqrt{2}$</p>`;
            } else if (question.includes('solve')) {
                return `<p><strong>Example:</strong> Solve $\\sqrt{x + 3} = 5$.</p>
                    <div class="step"><span class="step-label">Step 1:</span> Square both sides: $(\\sqrt{x + 3})^2 = 5^2$</div>
                    <div class="step"><span class="step-label">Step 2:</span> Simplify: $x + 3 = 25$</div>
                    <div class="step"><span class="step-label">Step 3:</span> Solve: $x = 22$</div>
                    <div class="step"><span class="step-label">Step 4:</span> Check: $\\sqrt{22 + 3} = \\sqrt{25} = 5$ ✓</div>
                    <p><strong>Answer:</strong> $x = 22$</p>`;
            } else {
                return `<p><strong>Example:</strong> Evaluate $\\sqrt{144}$.</p>
                    <div class="step"><span class="step-label">Step 1:</span> Recognize $144 = 12^2$</div>
                    <div class="step"><span class="step-label">Step 2:</span> $\\sqrt{144} = 12$</div>
                    <p><strong>Answer:</strong> $12$</p>`;
            }
        }

        // Rational Expressions
        if (category === 'Rational Expressions') {
            if (question.includes('simplify')) {
                return `<p><strong>Example:</strong> Simplify $\\frac{x^2 - 9}{x^2 - 6x + 9}$.</p>
                    <div class="step"><span class="step-label">Step 1:</span> Factor numerator: $x^2 - 9 = (x - 3)(x + 3)$</div>
                    <div class="step"><span class="step-label">Step 2:</span> Factor denominator: $x^2 - 6x + 9 = (x - 3)^2$</div>
                    <div class="step"><span class="step-label">Step 3:</span> Cancel common factors: $\\frac{(x - 3)(x + 3)}{(x - 3)^2} = \\frac{x + 3}{x - 3}$</div>
                    <p><strong>Answer:</strong> $\\frac{x + 3}{x - 3}$ (where $x \\neq 3$)</p>`;
            } else if (question.includes('add') || question.includes('subtract')) {
                return `<p><strong>Example:</strong> Add $\\frac{2}{x + 1} + \\frac{3}{x}$.</p>
                    <div class="step"><span class="step-label">Step 1:</span> Find LCD: $x(x + 1)$</div>
                    <div class="step"><span class="step-label">Step 2:</span> Convert: $\\frac{2x}{x(x + 1)} + \\frac{3(x + 1)}{x(x + 1)}$</div>
                    <div class="step"><span class="step-label">Step 3:</span> Combine: $\\frac{2x + 3x + 3}{x(x + 1)} = \\frac{5x + 3}{x(x + 1)}$</div>
                    <p><strong>Answer:</strong> $\\frac{5x + 3}{x(x + 1)}$</p>`;
            } else {
                return `<p><strong>Example:</strong> Solve $\\frac{4}{x - 2} = \\frac{3}{x}$.</p>
                    <div class="step"><span class="step-label">Step 1:</span> Cross multiply: $4x = 3(x - 2)$</div>
                    <div class="step"><span class="step-label">Step 2:</span> Expand: $4x = 3x - 6$</div>
                    <div class="step"><span class="step-label">Step 3:</span> Solve: $x = -6$</div>
                    <div class="step"><span class="step-label">Step 4:</span> Check: Neither denominator is zero ✓</div>
                    <p><strong>Answer:</strong> $x = -6$</p>`;
            }
        }

        // Probability & Statistics
        if (category === 'Probability & Statistics') {
            if (question.includes('probability') || question.includes('P(')) {
                return `<p><strong>Example:</strong> A bag contains 5 red and 3 blue marbles. What is $P(\\text{red})$?</p>
                    <div class="step"><span class="step-label">Step 1:</span> Total marbles: $5 + 3 = 8$</div>
                    <div class="step"><span class="step-label">Step 2:</span> Favorable outcomes: $5$ red</div>
                    <div class="step"><span class="step-label">Step 3:</span> $P(\\text{red}) = \\frac{5}{8}$</div>
                    <p><strong>Answer:</strong> $P(\\text{red}) = \\frac{5}{8}$</p>`;
            } else if (question.includes('mean') || question.includes('median') || question.includes('mode')) {
                return `<p><strong>Example:</strong> Find the mean, median, and mode of: $3, 5, 7, 5, 9, 5, 11$</p>
                    <div class="step"><span class="step-label">Mean:</span> $\\frac{3 + 5 + 7 + 5 + 9 + 5 + 11}{7} = \\frac{45}{7} \\approx 6.43$</div>
                    <div class="step"><span class="step-label">Median:</span> Ordered: $3, 5, 5, 5, 7, 9, 11$ → Middle value is $5$</div>
                    <div class="step"><span class="step-label">Mode:</span> Most frequent value is $5$ (appears 3 times)</div>
                    <p><strong>Answer:</strong> Mean = $6.43$, Median = $5$, Mode = $5$</p>`;
            } else {
                return `<p><strong>Example:</strong> Two dice are rolled. What is $P(\\text{sum} = 7)$?</p>
                    <div class="step"><span class="step-label">Step 1:</span> Total outcomes: $6 \\times 6 = 36$</div>
                    <div class="step"><span class="step-label">Step 2:</span> Favorable: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$ = 6 outcomes</div>
                    <div class="step"><span class="step-label">Step 3:</span> $P(\\text{sum} = 7) = \\frac{6}{36} = \\frac{1}{6}$</div>
                    <p><strong>Answer:</strong> $P(\\text{sum} = 7) = \\frac{1}{6}$</p>`;
            }
        }

        // Geometry
        if (category === 'Geometry') {
            if (question.includes('triangle')) {
                return `<p><strong>Example:</strong> Find the area of a triangle with base $b = 8$ and height $h = 5$.</p>
                    <div class="step"><span class="step-label">Step 1:</span> Use formula: $A = \\frac{1}{2} \\times b \\times h$</div>
                    <div class="step"><span class="step-label">Step 2:</span> Substitute: $A = \\frac{1}{2} \\times 8 \\times 5 = 20$</div>
                    <p><strong>Answer:</strong> Area = $20$ square units</p>`;
            } else if (question.includes('circle')) {
                return `<p><strong>Example:</strong> Find the area of a circle with radius $r = 6$.</p>
                    <div class="step"><span class="step-label">Step 1:</span> Use formula: $A = \\pi r^2$</div>
                    <div class="step"><span class="step-label">Step 2:</span> Substitute: $A = \\pi (6)^2 = 36\\pi$</div>
                    <p><strong>Answer:</strong> Area = $36\\pi$ square units (or approximately $113.1$)</p>`;
            } else if (question.includes('pythagorean')) {
                return `<p><strong>Example:</strong> Find the hypotenuse of a right triangle with legs $a = 3$ and $b = 4$.</p>
                    <div class="step"><span class="step-label">Step 1:</span> Use formula: $a^2 + b^2 = c^2$</div>
                    <div class="step"><span class="step-label">Step 2:</span> Substitute: $3^2 + 4^2 = c^2$ → $9 + 16 = c^2$</div>
                    <div class="step"><span class="step-label">Step 3:</span> Solve: $c^2 = 25$ → $c = 5$</div>
                    <p><strong>Answer:</strong> Hypotenuse = $5$</p>`;
            } else {
                return `<p><strong>Example:</strong> Find the volume of a cylinder with radius $r = 4$ and height $h = 10$.</p>
                    <div class="step"><span class="step-label">Step 1:</span> Use formula: $V = \\pi r^2 h$</div>
                    <div class="step"><span class="step-label">Step 2:</span> Substitute: $V = \\pi (4)^2 (10) = 160\\pi$</div>
                    <p><strong>Answer:</strong> Volume = $160\\pi$ cubic units</p>`;
            }
        }

        // Exponential Functions
        if (category === 'Exponential Functions') {
            return `<p><strong>Example:</strong> Evaluate $f(3)$ if $f(x) = 2 \\cdot 3^x$.</p>
                <div class="step"><span class="step-label">Step 1:</span> Substitute $x = 3$: $f(3) = 2 \\cdot 3^3$</div>
                <div class="step"><span class="step-label">Step 2:</span> Calculate: $f(3) = 2 \\cdot 27 = 54$</div>
                <p><strong>Answer:</strong> $f(3) = 54$</p>`;
        }

        // Logarithmic Functions
        if (category === 'Logarithmic Functions') {
            return `<p><strong>Example:</strong> Evaluate $\\log_2(8)$.</p>
                <div class="step"><span class="step-label">Step 1:</span> Ask: $2^? = 8$</div>
                <div class="step"><span class="step-label">Step 2:</span> Since $2^3 = 8$, we have $\\log_2(8) = 3$</div>
                <p><strong>Answer:</strong> $\\log_2(8) = 3$</p>`;
        }

        // Domain & Range
        if (category === 'Domain & Range') {
            return `<p><strong>Example:</strong> Find the domain of $f(x) = \\sqrt{x - 4}$.</p>
                <div class="step"><span class="step-label">Step 1:</span> Inside square root must be $\\geq 0$: $x - 4 \\geq 0$</div>
                <div class="step"><span class="step-label">Step 2:</span> Solve: $x \\geq 4$</div>
                <p><strong>Answer:</strong> Domain: $x \\geq 4$ or $[4, \\infty)$</p>`;
        }

        // Default fallback
        return `<p><strong>Example:</strong> This concept can be applied to various problems. Practice with different values to master the concept!</p>`;
    }

    showExample() {
        if (this.exampleVisible) {
            this.hideExample();
        } else {
            const exampleHTML = this.generateExample();
            this.exampleText.innerHTML = exampleHTML;
            this.exampleSection.classList.add('show');
            this.exampleVisible = true;
            
            // Render MathJax for the example
            if (window.MathJax) {
                MathJax.typesetPromise([this.exampleText]).catch((err) => {
                    console.log('MathJax rendering error:', err);
                });
            }
        }
    }

    hideExample() {
        this.exampleSection.classList.remove('show');
        this.exampleVisible = false;
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FlashCardApp();
});

