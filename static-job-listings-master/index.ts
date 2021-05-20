interface IJob {
  image: string;
  company: string;
  hightlights?: string[];
  title: string;
  time: string;
  timing: string;
  location: string;
  role: string;
  level: string;
  languages: string[];
  tools?: string[];
}

let data: Array<IJob> = [
  {
    image: require('url:./images/photosnap.svg') as string,
    company: 'Photosnap',
    hightlights: ['New!', 'Featured'],
    title: 'Senior Frontend Developer',
    time: '1d ago',
    timing: 'Full Time',
    location: 'USA only',
    role: 'Frontend',
    level: 'Senior',
    languages: ['HTML', 'CSS', 'JavaScript'],
  },

  {
    image: require('url:./images/manage.svg') as string,
    company: 'Manage',
    hightlights: ['New!', 'Featured'],
    title: 'Fullstack Developer',
    time: '1d ago',
    timing: 'Part Time',
    location: 'Remote',
    role: 'Fullstack',
    level: 'Midweight',
    languages: ['Python'],
    tools: ['React'],
  },

  {
    image: require('url:./images/account.svg') as string,
    company: 'Account',
    hightlights: ['New!'],
    title: 'Junior Frontend Developer',
    time: '2d ago',
    timing: 'Part Time',
    location: 'USA only',
    role: 'Frontend',
    level: 'Junior',
    languages: ['JavaScript'],
    tools: ['React', 'Sass'],
  },

  {
    image: require('url:./images/myhome.svg') as string,
    company: 'MyHome',
    title: 'Junior Frontend Developer',
    time: '5d ago',
    timing: 'Contract',
    location: 'USA only',
    role: 'Frontend',
    level: 'Junior',
    languages: ['CSS', 'JavaScript'],
  },

  {
    image: require('url:./images/loop-studios.svg') as string,
    company: 'Loop Studios',
    title: 'Software Engineer',
    time: '1w ago',
    timing: 'Full Time',
    location: 'Worldwide',
    role: 'Fullstack',
    level: 'Midweight',
    languages: ['JavaScript', 'Ruby'],
    tools: ['Sass'],
  },

  {
    image: require('url:./images/faceit.svg') as string,
    company: 'FaceIt',
    title: 'Junior Backend Developer',
    time: '2w ago',
    timing: 'Full Time',
    location: 'UK only',
    role: 'Backend',
    level: 'Junior',
    languages: ['Ruby'],
    tools: ['RoR'],
  },

  {
    image: require('url:./images/shortly.svg') as string,
    company: 'Shortly',
    title: 'Junior Developer',
    time: '2w ago',
    timing: 'Full Time',
    location: 'Worldwide',
    role: 'Frontend',
    level: 'Junior',
    languages: ['HTML', 'JavaScript'],
    tools: ['Sass'],
  },

  {
    image: require('url:./images/insure.svg') as string,
    company: 'Insure',
    title: 'Junior Frontend Developer',
    time: '2w ago',
    timing: 'Full Time',
    location: 'USA only',
    role: 'Frontend',
    level: 'Junior',
    languages: ['JavaScript'],
    tools: ['Vue', 'Sass'],
  },

  {
    image: require('url:./images/eyecam-co.svg') as string,
    company: 'Eyecam Co.',
    title: 'Full Stack Engineer',
    time: '3w ago',
    timing: 'Full Time',
    location: 'Worldwide',
    role: 'Fullstack',
    level: 'Midweight',
    languages: ['JavaScript', 'Python'],
    tools: ['Django'],
  },

  {
    image: require('url:./images/the-air-filter-company.svg') as string,
    company: 'The Air Filter Company',
    title: 'Front-end Dev',
    time: '1mo ago',
    timing: 'Part Time',
    location: 'Worldwide',
    role: 'Frontend',
    level: 'Junior',
    languages: ['JavaScript'],
    tools: ['React', 'Sass'],
  },
];

let computed = data.map((i) => ({
  ...i,
  tags: i.tools
    ? [i.role, i.level, ...i.languages, ...i.tools]
    : [i.role, i.level, ...i.languages],
}));

let filter: string[] = [];
const filterContainer = document.getElementById('filter-container');
filterContainer.innerHTML = ``;

const updateFilterView = () => {
  computed = data
    .map((i) => ({
      ...i,
      tags: i.tools
        ? [i.role, i.level, ...i.languages, ...i.tools]
        : [i.role, i.level, ...i.languages],
    }))
    .filter((job) => {
      for (let i = 0; i < filter.length; i++) {
        if (!job.tags.includes(filter[i])) return false;
      }
      return true;
    });
  refreshList();
  if (filter.length === 0) {
    filterContainer.innerHTML = '';
    return;
  }
  // Create first time
  if (filterContainer.innerHTML === '') {
    filterContainer.innerHTML = `
    <div id="filter">
      <div id="chips">
      </div>
      <p id="clear">Clear</p>
    </div>
    `;

    let clearBtn = document.getElementById('clear') as HTMLParagraphElement;
    clearBtn.onclick = () => clearFilter();
  }
  // Update chips
  let chips = document.getElementById('chips') as HTMLDivElement;
  chips.innerHTML = filter
    .map(
      (i) => `
  <div class="chip">
    <p>${i}</p>
    <div class="clear-chip">x</div>
  </div>
  `
    )
    .join('\n');

  let clearBtns = document.getElementsByClassName(
    'clear-chip'
  ) as HTMLCollectionOf<HTMLDivElement>;
  for (let i = 0; i < clearBtns.length; i++) {
    clearBtns.item(i).onclick = () => removeFromFilter(filter[i]);
  }
};

const addToFilter = (value: string) => {
  console.log(`Add: ${value}`);
  if (filter.includes(value)) return;
  filter.push(value);
  updateFilterView();
};

const removeFromFilter = (value: string) => {
  console.log(`Remove: ${value}`);

  if (!filter.includes(value)) return;
  filter = filter.filter((v) => v !== value);
  updateFilterView();
};

const clearFilter = () => {
  filter = [];
  updateFilterView();
};

const content = document.getElementById('content') as HTMLDivElement;
function refreshList() {
  const jobs = computed
    .map(
      (job) => `
<div class="card" ${
        job.hightlights &&
        job.hightlights.includes('Featured') &&
        'data-featured'
      }>
  <div class="left">
    <img src="${job.image}" alt="Logo" class="logo">
    <div class="meta">
      <div class="company-and-highlights">
        <p class="company">${job.company}</p>
        ${
          job.hightlights
            ? `<div class="highlights">
            ${job.hightlights
              .map(
                (item) =>
                  `<div class="highlight" ${
                    item === `Featured` && `data-featured`
                  } >${item}</div>`
              )
              .join('\n')}
        </div>`
            : ''
        }
      </div>
      <p class="title">${job.title}</p>
      <p class="subtitle">${job.time} • ${job.timing} • ${job.location}</p>
    </div>
  </div>
  <div class="right">
    ${job.tags.map((tag) => `<p class="tag">${tag}</p>`).join('\n')}
  </div>
</div>
`
    )
    .join('\n');

  /*   <p class="tag">${job.role}</p>
  <p class="tag">${job.level}</p>
  ${job.languages.map((lang) => `<p class="tag">${lang}</p>`).join('\n')}
  ${
    job.tools
      ? job.tools.map((tool) => `<p class="tag">${tool}</p>`).join('\n')
      : ''
  } */

  content.innerHTML = jobs;

  // Set event listener for Tags
  const tags = document.getElementsByClassName(
    'tag'
  ) as HTMLCollectionOf<HTMLParagraphElement>;
  for (let i = 0; i < tags.length; i++) {
    tags.item(i).onclick = () => addToFilter(tags.item(i).innerHTML);
  }
}
refreshList();
