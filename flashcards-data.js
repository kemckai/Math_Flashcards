// TSI Math Complete Cheat Sheet Flash Cards (Updated January 2026)
const mathFlashCards = [
  // Core Linear Equations & Forms
  {
    category: "Linear Equations & Forms",
    question: "What is the slope formula?",
    answer: "$m = \\frac{y_2 - y_1}{x_2 - x_1}$"
  },
  {
    category: "Linear Equations & Forms",
    question: "What is the slope-intercept form?",
    answer: "$y = mx + b$"
  },
  {
    category: "Linear Equations & Forms",
    question: "What is the standard form of a linear equation?",
    answer: "$Ax + By = C$"
  },
  
  // Quadratic Equations
  {
    category: "Quadratic Equations",
    question: "What is the quadratic formula?",
    answer: "$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$"
  },
  {
    category: "Quadratic Equations",
    question: "What is the vertex form of a quadratic equation?",
    answer: "$y = a(x - h)^2 + k$ where the vertex is at $(h, k)$"
  },
  {
    category: "Quadratic Equations",
    question: "How do you find the x-coordinate of the vertex from standard form?",
    answer: "$x = \\frac{-b}{2a}$"
  },
  {
    category: "Quadratic Equations",
    question: "What is the difference of squares factoring formula?",
    answer: "$a^2 - b^2 = (a - b)(a + b)$"
  },
  
  // Systems of Equations
  {
    category: "Systems of Equations",
    question: "How do you solve a system using substitution?",
    answer: "Replace one variable with an expression from the other equation"
  },
  {
    category: "Systems of Equations",
    question: "How do you solve a system using elimination?",
    answer: "Make coefficients of one variable opposites, then add/subtract the equations"
  },
  {
    category: "Systems of Equations",
    question: "How do you solve a system by graphing?",
    answer: "The solution is the intersection point of the two lines"
  },
  
  // Functions - Basics
  {
    category: "Functions - Basics",
    question: "What does function notation $f(x)$ mean?",
    answer: "$f(x) =$ expression, where $f(2)$ means substitute $x = 2$ into the expression"
  },
  {
    category: "Functions - Basics",
    question: "If $f(x) = 3x + 5$, what is $f(2)$?",
    answer: "$f(2) = 3(2) + 5 = 11$"
  },
  {
    category: "Functions - Basics",
    question: "What are zeros of a function?",
    answer: "Values of $x$ where $f(x) = 0$ (x-intercepts)"
  },
  
  // Inequalities - Rules
  {
    category: "Inequalities",
    question: "What is the first step when solving inequalities?",
    answer: "Distribute first"
  },
  {
    category: "Inequalities",
    question: "What happens to the inequality sign when multiplying or dividing by a negative number?",
    answer: "Flip the inequality sign"
  },
  {
    category: "Inequalities",
    question: "How do you graph inequalities?",
    answer: "Closed circle $(\\bullet)$ for $\\geq$ or $\\leq$; open circle $(\\odot)$ for $>$ or $<$. Shade left for 'less than', right for 'greater than'"
  },
  
  // Compound Inequalities
  {
    category: "Compound Inequalities",
    question: "What does an 'and' compound inequality $a \\leq x \\leq b$ mean?",
    answer: "$x$ must satisfy both parts of the inequality"
  },
  {
    category: "Compound Inequalities",
    question: "How do you solve compound inequalities?",
    answer: "Perform the same operation on all three parts"
  },
  {
    category: "Compound Inequalities",
    question: "What is the shortcut for solving $a < bx + c < d$?",
    answer: "Subtract $c$: $a - c < bx < d - c$, then divide (flip if $b$ is negative)"
  },
  
  // Temperature Conversions
  {
    category: "Temperature Conversions",
    question: "How do you convert Celsius to Fahrenheit?",
    answer: "$°F = (°C \\times \\frac{9}{5}) + 32$"
  },
  {
    category: "Temperature Conversions",
    question: "How do you convert Fahrenheit to Celsius?",
    answer: "$°C = (°F - 32) \\times \\frac{5}{9}$"
  },
  {
    category: "Temperature Conversions",
    question: "What is the freezing point in both scales?",
    answer: "$0°C = 32°F$"
  },
  {
    category: "Temperature Conversions",
    question: "What is a hot summer day approximately in both scales?",
    answer: "$\\sim 32°C \\approx 90°F$"
  },
  {
    category: "Temperature Conversions",
    question: "What is comfortable room temperature approximately in both scales?",
    answer: "$\\sim 22°C \\approx 72°F$"
  },
  
  // Function Domain & Range
  {
    category: "Domain & Range",
    question: "What is the domain and range of linear functions?",
    answer: "Domain: all real numbers; Range: all real numbers"
  },
  {
    category: "Domain & Range",
    question: "What is the domain and range of quadratic functions (parabolas)?",
    answer: "Domain: all real numbers; Range: $[\\text{vertex } y, \\infty)$ if opens up or $(-\\infty, \\text{vertex } y]$ if opens down"
  },
  {
    category: "Domain & Range",
    question: "What is the domain and range of square root functions?",
    answer: "Domain: inside $\\geq 0$; Range: $y \\geq 0$"
  },
  {
    category: "Domain & Range",
    question: "What is the domain of rational functions (1 over linear)?",
    answer: "Domain: denominator $\\neq 0$; vertical asymptote where denominator = 0"
  },
  {
    category: "Domain & Range",
    question: "What is the domain and range of absolute value functions?",
    answer: "Domain: all real numbers; Range: $y \\geq \\text{vertex } y$"
  },
  
  // Exponential Functions
  {
    category: "Exponential Functions",
    question: "What is the general form of an exponential function?",
    answer: "$f(x) = a \\cdot b^x$ where $a$ = starting value, $b$ = base"
  },
  {
    category: "Exponential Functions",
    question: "When does an exponential function show growth vs decay?",
    answer: "Growth when $b > 1$; decay when $0 < b < 1$"
  },
  {
    category: "Exponential Functions",
    question: "What is the domain and range of exponential functions?",
    answer: "Domain: all real numbers; Range: $y > 0$ (never touches $y = 0$)"
  },
  {
    category: "Exponential Functions",
    question: "What is the horizontal asymptote of exponential functions?",
    answer: "$y = 0$"
  },
  {
    category: "Exponential Functions",
    question: "What is the y-intercept of $f(x) = a \\cdot b^x$?",
    answer: "$(0, a)$"
  },
  {
    category: "Exponential Functions",
    question: "Do exponential functions have x-intercepts?",
    answer: "No x-intercepts (if $a > 0$)"
  },
  
  // Logarithmic Functions
  {
    category: "Logarithmic Functions",
    question: "What does $y = \\log_b(x)$ mean?",
    answer: "$b^y = x$"
  },
  {
    category: "Logarithmic Functions",
    question: "What is the domain and range of logarithmic functions?",
    answer: "Domain: $x > 0$; Range: all real numbers"
  },
  {
    category: "Logarithmic Functions",
    question: "What is the vertical asymptote of logarithmic functions?",
    answer: "$x = 0$"
  },
  {
    category: "Logarithmic Functions",
    question: "What is the x-intercept of logarithmic functions?",
    answer: "$(1, 0)$"
  },
  {
    category: "Logarithmic Functions",
    question: "What are the key inverse properties of logarithms?",
    answer: "$\\log_b(b^x) = x$ and $b^{\\log_b(x)} = x$"
  },
  {
    category: "Logarithmic Functions",
    question: "How do you switch between exponential and logarithmic forms?",
    answer: "Swap $x$ and $y$ to switch between exponential and log forms"
  },
  
  // Geometry Formulas
  {
    category: "Geometry",
    question: "What is the area of a triangle?",
    answer: "$A = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$"
  },
  {
    category: "Geometry",
    question: "What is the area of a rectangle?",
    answer: "$A = \\text{length} \\times \\text{width}$"
  },
  {
    category: "Geometry",
    question: "What is the circumference of a circle?",
    answer: "$C = 2\\pi r$"
  },
  {
    category: "Geometry",
    question: "What is the area of a circle?",
    answer: "$A = \\pi r^2$"
  },
  {
    category: "Geometry",
    question: "What is the Pythagorean theorem?",
    answer: "$a^2 + b^2 = c^2$ where $c$ is the hypotenuse"
  },
  {
    category: "Geometry",
    question: "What is the volume of a rectangular prism?",
    answer: "$V = \\text{length} \\times \\text{width} \\times \\text{height}$"
  },
  {
    category: "Geometry",
    question: "What is the volume of a cylinder?",
    answer: "$V = \\pi r^2 \\times \\text{height}$"
  },
  {
    category: "Geometry",
    question: "What is the distance formula?",
    answer: "$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$"
  },
  
  // Square Root Basics
  {
    category: "Square Roots",
    question: "What is the principal square root?",
    answer: "The principal square root $(\\sqrt{})$ is always $\\geq 0$"
  },
  {
    category: "Square Roots",
    question: "What is $\\sqrt{a^2}$ equal to?",
    answer: "$\\sqrt{a^2} = |a|$ (absolute value)"
  },
  {
    category: "Square Roots",
    question: "What are the perfect squares up to 144?",
    answer: "$1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144$"
  },
  
  // Simplifying Square Roots
  {
    category: "Square Roots",
    question: "How do you simplify square roots?",
    answer: "Factor out perfect squares. Example: $\\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}$"
  },
  {
    category: "Square Roots",
    question: "Simplify $\\sqrt{50}$",
    answer: "$\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}$"
  },
  {
    category: "Square Roots",
    question: "Simplify $\\sqrt{200}$",
    answer: "$\\sqrt{200} = \\sqrt{100 \\times 2} = 10\\sqrt{2}$"
  },
  {
    category: "Square Roots",
    question: "What is the rule for $\\sqrt{a \\times b}$?",
    answer: "$\\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b}$ (only when $a, b \\geq 0$)"
  },
  {
    category: "Square Roots",
    question: "What is the rule for $\\sqrt{\\frac{a}{b}}$?",
    answer: "$\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$ (when $b \\neq 0$ and $a, b \\geq 0$)"
  },
  
  // Solving Square Root Equations
  {
    category: "Square Roots",
    question: "What are the steps to solve square root equations?",
    answer: "1. Isolate the square root 2. Square both sides 3. Solve the resulting equation 4. Check for extraneous solutions (very common TSI trap!)"
  },
  {
    category: "Square Roots",
    question: "Why must you check solutions when solving square root equations?",
    answer: "Extraneous solutions are very common - always check your answers!"
  },
  
  // Common TSI Square Root Questions
  {
    category: "Square Roots",
    question: "What types of square root questions appear on the TSI?",
    answer: "Simplify $\\sqrt{\\text{expression}}$, solve $\\sqrt{\\text{linear}} = \\text{number}$, solve $\\sqrt{\\text{linear}} = \\text{linear}$ (check solutions), find domain of $f(x) = \\sqrt{\\text{quadratic or linear}}$, evaluate $f(\\text{perfect square})$"
  },
  
  // Rational Expressions Basics
  {
    category: "Rational Expressions",
    question: "What is a rational expression?",
    answer: "A rational expression is a fraction with polynomials in numerator and/or denominator. Example: $\\frac{x^2 - 4}{x + 3}$ or $\\frac{5}{x - 2}$"
  },
  {
    category: "Rational Expressions",
    question: "How do you find the domain of a rational expression?",
    answer: "Denominator $\\neq 0$ → exclude values that make denominator zero. Example: For $\\frac{x + 1}{x - 5}$, domain is all real numbers except $x \\neq 5$"
  },
  
  // Simplifying Rational Expressions
  {
    category: "Rational Expressions",
    question: "How do you simplify rational expressions?",
    answer: "Factor numerator and denominator completely, then cancel common factors (never cancel individual terms!)"
  },
  
  // Multiplying & Dividing Rational Expressions
  {
    category: "Rational Expressions",
    question: "How do you multiply rational expressions?",
    answer: "$\\frac{\\text{num}_1 \\times \\text{num}_2}{\\text{den}_1 \\times \\text{den}_2}$ → simplify"
  },
  {
    category: "Rational Expressions",
    question: "How do you divide rational expressions?",
    answer: "Multiply by reciprocal → flip second fraction"
  },
  
  // Adding & Subtracting Rational Expressions
  {
    category: "Rational Expressions",
    question: "How do you add or subtract rational expressions?",
    answer: "Need common denominator (LCD = least common multiple of denominators). Combine numerators, keep common denominator. Simplify final result."
  },
  
  // Solving Rational Equations
  {
    category: "Rational Expressions",
    question: "How do you solve rational equations?",
    answer: "Find LCD, multiply both sides by LCD to clear denominators. Solve resulting equation. Check solutions (extraneous if they make original denominator zero)."
  },
  
  // Rational Practice Problems
  {
    category: "Rational Expressions",
    question: "Simplify $\\frac{x^2 - 25}{x^2 - 10x + 25}$",
    answer: "$\\frac{x^2 - 25}{x^2 - 10x + 25} = \\frac{(x + 5)(x - 5)}{(x - 5)^2} = \\frac{x + 5}{x - 5}$"
  },
  {
    category: "Rational Expressions",
    question: "Add $\\frac{2}{x + 3} + \\frac{5}{x}$",
    answer: "$\\frac{2}{x + 3} + \\frac{5}{x} = \\frac{2x + 15}{x(x + 3)}$"
  },
  {
    category: "Rational Expressions",
    question: "Solve $\\frac{4}{x + 1} = \\frac{3}{x}$",
    answer: "$x = -12$ (check: valid)"
  },
  {
    category: "Rational Expressions",
    question: "Find the domain of $f(x) = \\frac{x - 2}{x^2 - 4}$",
    answer: "$x \\neq \\pm 2$"
  },
  {
    category: "Rational Expressions",
    question: "Solve $\\frac{2}{x} = \\frac{5}{x - 3}$",
    answer: "$x = \\frac{6}{7}$ (check: valid)"
  },
  
  // Probability & Statistics
  {
    category: "Probability & Statistics",
    question: "What is the formula for probability of an event?",
    answer: "$P(\\text{event}) = \\frac{\\text{favorable outcomes}}{\\text{total possible outcomes}}$ where $0 \\leq P \\leq 1$"
  },
  {
    category: "Probability & Statistics",
    question: "What is the complement rule for probability?",
    answer: "$P(\\text{not event}) = 1 - P(\\text{event})$"
  },
  {
    category: "Probability & Statistics",
    question: "What is the probability of independent events ('and')?",
    answer: "$P(A \\text{ and } B) = P(A) \\times P(B)$"
  },
  {
    category: "Probability & Statistics",
    question: "What is the probability of mutually exclusive events ('or')?",
    answer: "$P(A \\text{ or } B) = P(A) + P(B)$"
  },
  {
    category: "Probability & Statistics",
    question: "What is the probability of non-mutually exclusive events ('or')?",
    answer: "$P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$"
  },
  
  // Measures of Center & Spread
  {
    category: "Probability & Statistics",
    question: "What is the mean (average)?",
    answer: "Mean = sum of values ÷ number of values"
  },
  {
    category: "Probability & Statistics",
    question: "What is the median?",
    answer: "Median = middle value when ordered (average two middle if even count)"
  },
  {
    category: "Probability & Statistics",
    question: "What is the mode?",
    answer: "Mode = most frequent value (can be none or multiple)"
  },
  {
    category: "Probability & Statistics",
    question: "What is the range?",
    answer: "Range = maximum - minimum"
  },
  
  // Probability & Statistics Practice Problems
  {
    category: "Probability & Statistics",
    question: "For data: 3, 7, 8, 5, 12, 14, 21, 13, 18, find the mean, median, and mode",
    answer: "Mean = 11, Median = 12, Mode = none"
  },
  {
    category: "Probability & Statistics",
    question: "If $P(\\text{red}) = \\frac{3}{8}$, what is $P(\\text{not red})$?",
    answer: "$P(\\text{not red}) = \\frac{5}{8}$"
  },
  {
    category: "Probability & Statistics",
    question: "What is the probability of rolling a sum of 7 with two dice?",
    answer: "$P = \\frac{6}{36} = \\frac{1}{6}$"
  },
  {
    category: "Probability & Statistics",
    question: "A bag has 5 red and 3 blue marbles. If you draw two without replacement, what is $P(\\text{both red})$?",
    answer: "$P(\\text{both red}) = \\frac{5}{8} \\times \\frac{4}{7} = \\frac{5}{14}$"
  },
  {
    category: "Probability & Statistics",
    question: "If $P(A) = 0.4$, $P(B) = 0.3$, and they are mutually exclusive, what is $P(A \\text{ or } B)$?",
    answer: "$P(A \\text{ or } B) = 0.7$"
  }
];
