// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" 
// for the development and functioning of living organisms. In DNA strings, symbols "A" and "T" are 
// complements of each other, as "C" and "G". You have function with one side of the DNA (string, except 
// for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no 
// DNA at all (again, except for Haskell).

// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

// DNAStrand ("ATTGC") # return "TAACG"
// DNAStrand ("GTAT") # return "CATA"


const DNAStrand = (dna) => {
  let dnaSplit = dna.split('')
  let dnaCompliment = dnaSplit.map(symbol => {
    if (symbol === 'A') {
      return 'T'
    } else if (symbol === 'T') {
      return 'A'
    } else if (symbol === 'C') {
      return 'G'
    } else if (symbol === 'G') {
      return 'C'
    }
  }) 
  return dnaCompliment.join('')
}
