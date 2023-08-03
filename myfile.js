const containerDiv = document.createElement('div');
containerDiv.classList.add('container', 'mt-4');

// Create the flex-container div with class and id
const flexContainerDiv = document.createElement('div');
flexContainerDiv.classList.add('flex-container');
flexContainerDiv.setAttribute('id', 'sortable');

// Create the card div with class and inline styles
const cardDiv = document.createElement('div');
cardDiv.classList.add('card');
cardDiv.style.width = '15rem';
cardDiv.style.height = '13rem');
cardDiv.setAttribute('id', 'applicationContainerid');

// Create the anchor tag for the image
const imageAnchor = document.createElement('a');
imageAnchor.setAttribute('href', '');

// Create the image element and set its source (src) attribute
const imageElement = document.createElement('img');
imageElement.setAttribute('alt', 'Card image');
// Set the image source using imageElement.src = 'path/to/image.jpg';

// Append the image element to the image anchor
imageAnchor.appendChild(imageElement);

// Create the card-header div
const cardHeaderDiv = document.createElement('div');
cardHeaderDiv.classList.add('card-header', 'd-flex', 'justify-content-end');

// Create the anchor tags for the icons (grip-horizontal, heart, and share)
const gripAnchor = document.createElement('a');
gripAnchor.setAttribute('href', '#');

const gripIcon = document.createElement('i');
gripIcon.classList.add('fas', 'fa-grip-horizontal', 'text-white');
gripAnchor.appendChild(gripIcon);

const heartAnchor = document.createElement('a');
heartAnchor.setAttribute('href', '#');

const heartIcon = document.createElement('i');
heartIcon.classList.add('fas', 'fa-heart', 'bookmark');
heartAnchor.appendChild(heartIcon);

const shareAnchor = document.createElement('a');
shareAnchor.classList.add('text-white', 'share');
shareAnchor.setAttribute('href', '#');
shareAnchor.setAttribute('id', 'share-');
shareAnchor.setAttribute('data-bs-toggle', 'modal');
shareAnchor.setAttribute('data-bs-target', '#shareModal');

const shareSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
shareSVG.setAttribute('width', '15');
shareSVG.setAttribute('height', '14');
shareSVG.setAttribute('fill', 'currentColor');
shareSVG.classList.add('bi', 'bi-share');
shareSVG.setAttribute('viewBox', '0 0 16 16');

const sharePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
sharePath.setAttribute('d', 'M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z');

shareSVG.appendChild(sharePath);
shareAnchor.appendChild(shareSVG);

// Append the anchor tags with icons to the card-header div
cardHeaderDiv.appendChild(gripAnchor);
cardHeaderDiv.appendChild(heartAnchor);
cardHeaderDiv.appendChild(shareAnchor);

// Create the card-footer div
const cardFooterDiv = document.createElement('div');
cardFooterDiv.classList.add('card-footer');

// Uncomment this section if you have dynamic data to add to the footer
// const footerTitle = document.createElement('h6');
// footerTitle.textContent = '{{ app.title }}';
// cardFooterDiv.appendChild(footerTitle);

// Append the elements to their respective parents
cardDiv.appendChild(imageAnchor);
cardDiv.appendChild(cardHeaderDiv);
cardDiv.appendChild(document.createElement('div'));
cardDiv.appendChild(cardFooterDiv);

flexContainerDiv.appendChild(cardDiv);
containerDiv.appendChild(flexContainerDiv);

// Append the entire container to the document's body
document.body.appendChild(containerDiv);
