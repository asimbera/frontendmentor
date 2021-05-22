const tabs = document.getElementsByClassName(
  'tab'
) as HTMLCollectionOf<HTMLAnchorElement>;
const views = document.getElementsByClassName(
  'tabview'
) as HTMLCollectionOf<HTMLDivElement>;

for (let i = 0; i < tabs.length; i++) {
  const tab = tabs.item(i);
  tab.onclick = () => {
    unselectAll();
    hideAll();

    tab.setAttribute('data-active', 'true');
    for (let j = 0; j < views.length; j++) {
      const view = views.item(j);
      if (view.getAttribute('data-index') === tab.getAttribute('data-index')) {
        view.style.display = 'grid';
      }
    }
  };
}

function unselectAll() {
  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs.item(i);
    tab.removeAttribute('data-active');
  }
}

function hideAll() {
  for (let i = 0; i < views.length; i++) {
    const view = views.item(i);
    view.style.display = 'none';
  }
}
