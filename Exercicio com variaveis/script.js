let varA = 'A'; /*B*/ let holdA = varA;
let varB = 'B'; /*C*/ let holdB = varB;
let varC = 'C'; /*A*/ let holdC = varC;  

alert(
`
o valor real de A ${varA} o novo valor de A é pra ser igual B: ${varA = holdB}
o valor real de B ${varB} o novo valor de B é pra ser igual C: ${varB = holdC}
o valor real de C ${varC} o novo valor de C é pra ser igual A: ${varC = holdA}
`);