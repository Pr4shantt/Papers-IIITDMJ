const questionPapers = [
    {
      title: "Subject 1 - Subject code 1",      
      professor: "Prof. A",
      branch: "Branch A",
      year: "2023",
      subjectCode: "NS101",
      url: "https://drive.google.com/file/d/1pgNKBq_WM__svV0BX6HQ4EkRozu1RTag/view?usp=sharing"
    },
    {
      title: "Subject 2 - Subject code 2",
      professor: "Prof. B",
      branch: "Branch B",
      year: "2023",
      subjectCode: "NS102",
      url: "https://drive.google.com/file/d/1dSGSkX6e9U8872sJpjEpa3iHjEsQboVZ/view?usp=sharing"
    },
    {
      title: "Subject 3 - Subject code 3",
      professor: "Prof. C",
      branch: "Branch C",
      year: "2023",
      subjectCode: "NS103",
      url: "https://drive.google.com/file/d/1-pDfDN_9Tq7KWoQ3G828Vk3vxg1cc4YU/view?usp=sharing"
    },
    // Add more question papers as needed
  ];
  
  if (document.getElementById('search-input')) {
    document.getElementById('search-input').addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        search();
      }
    });
  }
  
  
  function search() {
    const searchTerm = document.getElementById('search-input').value.trim();
    const professorFilter = document.getElementById('professor').value;
    const branchFilter = document.getElementById('branch').value;
    const yearFilter = document.getElementById('year').value;
    // const subjectCodeFilter = document.getElementById('subjectCode').value;
    const searchUrl = `results.html?searchTerm=${encodeURIComponent(searchTerm)}&professor=${encodeURIComponent(professorFilter)}&branch=${encodeURIComponent(branchFilter)}&year=${encodeURIComponent(yearFilter)}`;
    window.location.href = searchUrl;
  }
  
  
  
  function displayResults(papers) {
    const resultsSection = document.getElementById('results');
    resultsSection.innerHTML = '';
    console.log('Displaying papers:', papers);
  
    if (papers.length === 0) {
      resultsSection.innerHTML = '<p>No question papers found. Try different search criteria.</p>';
      return;
    }
  
    papers.forEach(paper => {
      const paperElement = document.createElement('div');
      paperElement.classList.add('paper');
  
      const titleElement = document.createElement('h3');
      titleElement.innerText = paper.title;
  
      const infoElement = document.createElement('p');
      infoElement.innerText = `${paper.professor} | ${paper.branch} | ${paper.year}`;
  
      const linkElement = document.createElement('a');
      linkElement.href = paper.url;
      linkElement.target = '_blank';
      linkElement.innerText = 'View Question Paper';

          paperElement.appendChild(titleElement);
    paperElement.appendChild(infoElement);
    paperElement.appendChild(linkElement);

    resultsSection.appendChild(paperElement);
  });
}

function handleResultsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const searchTerm = urlParams.get('searchTerm') || '';
  const professorFilter = urlParams.get('professor') || '';
  const branchFilter = urlParams.get('branch') || '';
  const yearFilter = urlParams.get('year') || '';
  const subjectCodeFilter = urlParams.get('subjectCode') || '';

  const filteredPapers = filterPapers(searchTerm, professorFilter, branchFilter, yearFilter, subjectCodeFilter);
  console.log('Filtered papers:', filteredPapers); // Add this line
  displayResults(filteredPapers);
}

function filterPapers(searchTerm, professorFilter, branchFilter, yearFilter, subjectCodeFilter) {
  return questionPapers.filter(paper => {
    const matchesSearchTerm = searchTerm === '' || paper.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProfessor = professorFilter === '' || paper.professor === professorFilter;
    const matchesBranch = branchFilter === '' || paper.branch === branchFilter;
    const matchesYear = yearFilter === '' || paper.year === yearFilter;
    const matchessubjectCode = subjectCodeFilter === '' || paper.subjectCode === subjectCodeFilter;

    return matchesSearchTerm && matchesProfessor && matchesBranch && matchesYear && matchessubjectCode;
  });
}

        
     
  
  