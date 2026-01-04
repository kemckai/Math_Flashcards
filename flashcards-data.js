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
  },
  
  // Trigonometry - Basic Definitions
  {
    category: "Trigonometry",
    question: "What does SOH-CAH-TOA stand for?",
    answer: "Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent"
  },
  {
    category: "Trigonometry",
    question: "How do you define sine in a right triangle?",
    answer: "$\\sin(\\theta) = \\frac{\\text{opposite}}{\\text{hypotenuse}}$"
  },
  {
    category: "Trigonometry",
    question: "How do you define cosine in a right triangle?",
    answer: "$\\cos(\\theta) = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$"
  },
  {
    category: "Trigonometry",
    question: "How do you define tangent in a right triangle?",
    answer: "$\\tan(\\theta) = \\frac{\\text{opposite}}{\\text{adjacent}}$"
  },
  {
    category: "Trigonometry",
    question: "What is the reciprocal of sine?",
    answer: "Cosecant: $\\csc(\\theta) = \\frac{1}{\\sin(\\theta)}$"
  },
  {
    category: "Trigonometry",
    question: "What is the reciprocal of cosine?",
    answer: "Secant: $\\sec(\\theta) = \\frac{1}{\\cos(\\theta)}$"
  },
  {
    category: "Trigonometry",
    question: "What is the reciprocal of tangent?",
    answer: "Cotangent: $\\cot(\\theta) = \\frac{1}{\\tan(\\theta)} = \\frac{\\cos(\\theta)}{\\sin(\\theta)}$"
  },
  {
    category: "Trigonometry",
    question: "What is the quotient identity for tangent?",
    answer: "$\\tan(\\theta) = \\frac{\\sin(\\theta)}{\\cos(\\theta)}$"
  },
  {
    category: "Trigonometry",
    question: "What are the co-function relationships?",
    answer: "$\\sin(\\theta) = \\cos(90° - \\theta)$, $\\cos(\\theta) = \\sin(90° - \\theta)$, $\\tan(\\theta) = \\cot(90° - \\theta)$"
  },
  
  // Trigonometry - Unit Circle & Special Angles
  {
    category: "Trigonometry",
    question: "What is $\\sin(0°)$ or $\\sin(0)$?",
    answer: "$\\sin(0) = 0$"
  },
  {
    category: "Trigonometry",
    question: "What is $\\cos(0°)$ or $\\cos(0)$?",
    answer: "$\\cos(0) = 1$"
  },
  {
    category: "Trigonometry",
    question: "What is $\\sin(30°)$ or $\\sin(\\pi/6)$?",
    answer: "$\\sin(\\pi/6) = \\frac{1}{2}$"
  },
  {
    category: "Trigonometry",
    question: "What is $\\cos(30°)$ or $\\cos(\\pi/6)$?",
    answer: "$\\cos(\\pi/6) = \\frac{\\sqrt{3}}{2}$"
  },
  {
    category: "Trigonometry",
    question: "What is $\\sin(45°)$ or $\\sin(\\pi/4)$?",
    answer: "$\\sin(\\pi/4) = \\frac{\\sqrt{2}}{2}$"
  },
  {
    category: "Trigonometry",
    question: "What is $\\cos(45°)$ or $\\cos(\\pi/4)$?",
    answer: "$\\cos(\\pi/4) = \\frac{\\sqrt{2}}{2}$"
  },
  {
    category: "Trigonometry",
    question: "What is $\\tan(45°)$ or $\\tan(\\pi/4)$?",
    answer: "$\\tan(\\pi/4) = 1$"
  },
  {
    category: "Trigonometry",
    question: "What is $\\sin(60°)$ or $\\sin(\\pi/3)$?",
    answer: "$\\sin(\\pi/3) = \\frac{\\sqrt{3}}{2}$"
  },
  {
    category: "Trigonometry",
    question: "What is $\\cos(60°)$ or $\\cos(\\pi/3)$?",
    answer: "$\\cos(\\pi/3) = \\frac{1}{2}$"
  },
  {
    category: "Trigonometry",
    question: "What is $\\sin(90°)$ or $\\sin(\\pi/2)$?",
    answer: "$\\sin(\\pi/2) = 1$"
  },
  {
    category: "Trigonometry",
    question: "What is $\\cos(90°)$ or $\\cos(\\pi/2)$?",
    answer: "$\\cos(\\pi/2) = 0$"
  },
  {
    category: "Trigonometry",
    question: "What is $\\sin(\\pi)$?",
    answer: "$\\sin(\\pi) = 0$"
  },
  {
    category: "Trigonometry",
    question: "What is $\\cos(\\pi)$?",
    answer: "$\\cos(\\pi) = -1$"
  },
  {
    category: "Trigonometry",
    question: "What is $\\sin(3\\pi/2)$?",
    answer: "$\\sin(3\\pi/2) = -1$"
  },
  {
    category: "Trigonometry",
    question: "What is $\\cos(3\\pi/2)$?",
    answer: "$\\cos(3\\pi/2) = 0$"
  },
  
  // Trigonometry - Quadrant Signs & Reference Angles
  {
    category: "Trigonometry",
    question: "What does ASTC stand for (All Students Take Calculus)?",
    answer: "All (I) - all functions positive; Students (II) - sine positive; Take (III) - tangent positive; Calculus (IV) - cosine positive"
  },
  {
    category: "Trigonometry",
    question: "In which quadrant are both sine and cosine positive?",
    answer: "Quadrant I (0° to 90° or 0 to $\\pi/2$)"
  },
  {
    category: "Trigonometry",
    question: "In which quadrant is sine positive but cosine negative?",
    answer: "Quadrant II (90° to 180° or $\\pi/2$ to $\\pi$)"
  },
  {
    category: "Trigonometry",
    question: "In which quadrant are both sine and cosine negative?",
    answer: "Quadrant III (180° to 270° or $\\pi$ to $3\\pi/2$)"
  },
  {
    category: "Trigonometry",
    question: "In which quadrant is cosine positive but sine negative?",
    answer: "Quadrant IV (270° to 360° or $3\\pi/2$ to $2\\pi$)"
  },
  {
    category: "Trigonometry",
    question: "What is a reference angle?",
    answer: "The acute angle formed by the terminal side of an angle and the x-axis. Always between 0° and 90° (or 0 and $\\pi/2$)"
  },
  
  // Trigonometry - Identities
  {
    category: "Trigonometry",
    question: "What is the fundamental Pythagorean identity?",
    answer: "$\\sin^2(\\theta) + \\cos^2(\\theta) = 1$"
  },
  {
    category: "Trigonometry",
    question: "What is the Pythagorean identity involving tangent and secant?",
    answer: "$\\tan^2(\\theta) + 1 = \\sec^2(\\theta)$"
  },
  {
    category: "Trigonometry",
    question: "What is the Pythagorean identity involving cotangent and cosecant?",
    answer: "$\\cot^2(\\theta) + 1 = \\csc^2(\\theta)$"
  },
  {
    category: "Trigonometry",
    question: "What is the sum formula for sine?",
    answer: "$\\sin(A + B) = \\sin(A)\\cos(B) + \\cos(A)\\sin(B)$"
  },
  {
    category: "Trigonometry",
    question: "What is the difference formula for sine?",
    answer: "$\\sin(A - B) = \\sin(A)\\cos(B) - \\cos(A)\\sin(B)$"
  },
  {
    category: "Trigonometry",
    question: "What is the sum formula for cosine?",
    answer: "$\\cos(A + B) = \\cos(A)\\cos(B) - \\sin(A)\\sin(B)$"
  },
  {
    category: "Trigonometry",
    question: "What is the difference formula for cosine?",
    answer: "$\\cos(A - B) = \\cos(A)\\cos(B) + \\sin(A)\\sin(B)$"
  },
  {
    category: "Trigonometry",
    question: "What is the sum formula for tangent?",
    answer: "$\\tan(A + B) = \\frac{\\tan(A) + \\tan(B)}{1 - \\tan(A)\\tan(B)}$"
  },
  {
    category: "Trigonometry",
    question: "What is the double angle formula for sine?",
    answer: "$\\sin(2\\theta) = 2\\sin(\\theta)\\cos(\\theta)$"
  },
  {
    category: "Trigonometry",
    question: "What is the double angle formula for cosine?",
    answer: "$\\cos(2\\theta) = \\cos^2(\\theta) - \\sin^2(\\theta) = 2\\cos^2(\\theta) - 1 = 1 - 2\\sin^2(\\theta)$"
  },
  {
    category: "Trigonometry",
    question: "What is the double angle formula for tangent?",
    answer: "$\\tan(2\\theta) = \\frac{2\\tan(\\theta)}{1 - \\tan^2(\\theta)}$"
  },
  {
    category: "Trigonometry",
    question: "What is the half angle formula for sine?",
    answer: "$\\sin\\left(\\frac{\\theta}{2}\\right) = \\pm\\sqrt{\\frac{1 - \\cos(\\theta)}{2}}$"
  },
  {
    category: "Trigonometry",
    question: "What is the half angle formula for cosine?",
    answer: "$\\cos\\left(\\frac{\\theta}{2}\\right) = \\pm\\sqrt{\\frac{1 + \\cos(\\theta)}{2}}$"
  },
  {
    category: "Trigonometry",
    question: "What are the even/odd identities?",
    answer: "$\\sin(-\\theta) = -\\sin(\\theta)$ (odd), $\\cos(-\\theta) = \\cos(\\theta)$ (even), $\\tan(-\\theta) = -\\tan(\\theta)$ (odd)"
  },
  
  // Trigonometry - Graphs & Properties
  {
    category: "Trigonometry",
    question: "What is the period of $y = \\sin(x)$?",
    answer: "Period = $2\\pi$"
  },
  {
    category: "Trigonometry",
    question: "What is the period of $y = \\cos(x)$?",
    answer: "Period = $2\\pi$"
  },
  {
    category: "Trigonometry",
    question: "What is the period of $y = \\tan(x)$?",
    answer: "Period = $\\pi$"
  },
  {
    category: "Trigonometry",
    question: "What is the period of $y = \\sec(x)$ and $y = \\csc(x)$?",
    answer: "Period = $2\\pi$"
  },
  {
    category: "Trigonometry",
    question: "What is the period of $y = \\cot(x)$?",
    answer: "Period = $\\pi$"
  },
  {
    category: "Trigonometry",
    question: "What is the amplitude of $y = \\sin(x)$?",
    answer: "Amplitude = 1 (or the coefficient of the sine function)"
  },
  {
    category: "Trigonometry",
    question: "For $y = A\\sin(Bx + C) + D$, what does $A$ represent?",
    answer: "$A$ = amplitude (vertical stretch/compression)"
  },
  {
    category: "Trigonometry",
    question: "For $y = A\\sin(Bx + C) + D$, what does $B$ represent?",
    answer: "$B$ affects the period: Period = $\\frac{2\\pi}{B}$"
  },
  {
    category: "Trigonometry",
    question: "For $y = A\\sin(Bx + C) + D$, what does $C$ represent?",
    answer: "$C$ = phase shift (horizontal shift). Shift left if $C > 0$, right if $C < 0$"
  },
  {
    category: "Trigonometry",
    question: "For $y = A\\sin(Bx + C) + D$, what does $D$ represent?",
    answer: "$D$ = vertical shift (up if positive, down if negative)"
  },
  {
    category: "Trigonometry",
    question: "What is the range of $y = \\sin(x)$?",
    answer: "Range: $[-1, 1]$"
  },
  {
    category: "Trigonometry",
    question: "What is the range of $y = \\cos(x)$?",
    answer: "Range: $[-1, 1]$"
  },
  {
    category: "Trigonometry",
    question: "What is the range of $y = \\tan(x)$?",
    answer: "Range: $(-\\infty, \\infty)$ or all real numbers"
  },
  
  // Trigonometry - Inverse Functions
  {
    category: "Trigonometry",
    question: "What is the domain of $y = \\arcsin(x)$ or $\\sin^{-1}(x)$?",
    answer: "Domain: $[-1, 1]$"
  },
  {
    category: "Trigonometry",
    question: "What is the range of $y = \\arcsin(x)$ or $\\sin^{-1}(x)$?",
    answer: "Range: $[-\\pi/2, \\pi/2]$ or $[-90°, 90°]$"
  },
  {
    category: "Trigonometry",
    question: "What is the domain of $y = \\arccos(x)$ or $\\cos^{-1}(x)$?",
    answer: "Domain: $[-1, 1]$"
  },
  {
    category: "Trigonometry",
    question: "What is the range of $y = \\arccos(x)$ or $\\cos^{-1}(x)$?",
    answer: "Range: $[0, \\pi]$ or $[0°, 180°]$"
  },
  {
    category: "Trigonometry",
    question: "What is the domain of $y = \\arctan(x)$ or $\\tan^{-1}(x)$?",
    answer: "Domain: $(-\\infty, \\infty)$ or all real numbers"
  },
  {
    category: "Trigonometry",
    question: "What is the range of $y = \\arctan(x)$ or $\\tan^{-1}(x)$?",
    answer: "Range: $(-\\pi/2, \\pi/2)$ or $(-90°, 90°)$"
  },
  {
    category: "Trigonometry",
    question: "What is $\\arcsin(1/2)$?",
    answer: "$\\arcsin(1/2) = \\pi/6$ or $30°$"
  },
  {
    category: "Trigonometry",
    question: "What is $\\arccos(\\sqrt{2}/2)$?",
    answer: "$\\arccos(\\sqrt{2}/2) = \\pi/4$ or $45°$"
  },
  {
    category: "Trigonometry",
    question: "What is $\\arctan(1)$?",
    answer: "$\\arctan(1) = \\pi/4$ or $45°$"
  },
  
  // Trigonometry - Applications
  {
    category: "Trigonometry",
    question: "In a right triangle, if you know one angle and one side, how do you find the other sides?",
    answer: "Use trigonometric ratios: opposite = hypotenuse $\\times \\sin(\\theta)$, adjacent = hypotenuse $\\times \\cos(\\theta)$, hypotenuse = opposite $/ \\sin(\\theta)$ or adjacent $/ \\cos(\\theta)$"
  },
  {
    category: "Trigonometry",
    question: "What is the Law of Sines?",
    answer: "$\\frac{a}{\\sin(A)} = \\frac{b}{\\sin(B)} = \\frac{c}{\\sin(C)}$ where $a, b, c$ are sides opposite angles $A, B, C$"
  },
  {
    category: "Trigonometry",
    question: "When do you use the Law of Sines?",
    answer: "Use when you know: (1) two angles and one side (AAS or ASA), or (2) two sides and an angle opposite one of them (SSA - ambiguous case)"
  },
  {
    category: "Trigonometry",
    question: "What is the Law of Cosines?",
    answer: "$a^2 = b^2 + c^2 - 2bc\\cos(A)$ (and similar for $b^2$ and $c^2$)"
  },
  {
    category: "Trigonometry",
    question: "When do you use the Law of Cosines?",
    answer: "Use when you know: (1) three sides (SSS), or (2) two sides and the included angle (SAS)"
  },
  {
    category: "Trigonometry",
    question: "What is the area of a triangle given two sides and the included angle?",
    answer: "$A = \\frac{1}{2}ab\\sin(C)$ where $a$ and $b$ are sides and $C$ is the included angle"
  },
  {
    category: "Trigonometry",
    question: "What is Heron's formula for area of a triangle?",
    answer: "$A = \\sqrt{s(s-a)(s-b)(s-c)}$ where $s = \\frac{a+b+c}{2}$ (semi-perimeter)"
  },
  
  // Trigonometry - Common Problems
  {
    category: "Trigonometry",
    question: "What is $\\sin^2(\\theta) + \\cos^2(\\theta)$ equal to?",
    answer: "$\\sin^2(\\theta) + \\cos^2(\\theta) = 1$ (Pythagorean identity)"
  },
  {
    category: "Trigonometry",
    question: "If $\\sin(\\theta) = 3/5$ and $\\theta$ is in quadrant I, what is $\\cos(\\theta)$?",
    answer: "Use identity: $\\cos^2(\\theta) = 1 - \\sin^2(\\theta) = 1 - (3/5)^2 = 16/25$, so $\\cos(\\theta) = 4/5$ (positive in QI)"
  },
  {
    category: "Trigonometry",
    question: "What is $\\sin(\\pi - \\theta)$ equal to?",
    answer: "$\\sin(\\pi - \\theta) = \\sin(\\theta)$"
  },
  {
    category: "Trigonometry",
    question: "What is $\\cos(\\pi - \\theta)$ equal to?",
    answer: "$\\cos(\\pi - \\theta) = -\\cos(\\theta)$"
  },
  {
    category: "Trigonometry",
    question: "What is $\\sin(\\pi/2 - \\theta)$ equal to?",
    answer: "$\\sin(\\pi/2 - \\theta) = \\cos(\\theta)$"
  },
  {
    category: "Trigonometry",
    question: "What is $\\cos(\\pi/2 - \\theta)$ equal to?",
    answer: "$\\cos(\\pi/2 - \\theta) = \\sin(\\theta)$"
  }
];
