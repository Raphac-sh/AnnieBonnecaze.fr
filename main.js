/*
This file is part of AnnieBonnecaze.fr

    AnnieBonnecaze.fr is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    AnnieBonnecaze.fr is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with AnnieBonnecaze.fr.  If not, see <https://www.gnu.org/licenses/>.
*/

class Carousel {
  constructor(element, options = {slidesToScroll: 1,slidesVisible: 1}) {
    this.element = element;
    this.options = options;
    
    this.currentItem = 0;

    this.isMobile = false;
    this.isTablet = false;

    // HTML architecture
    let children = [].slice.call(element.children);
    this.root = this.createDiv("carousel");
    this.container = this.createDiv("carousel__container");
    this.root.appendChild(this.container);
    this.element.appendChild(this.root);

    this.items = children.map(child => {
      let item = this.createDiv("carousel__item");
      
      item.appendChild(child)
      this.container.appendChild(item);
      return item;
    });

    this.setStyle();
    this.createNav();

    this.onResize();
    window.addEventListener('resize', this.onResize.bind(this))
  }

  createDiv(className) {
    let div = document.createElement("div");
    div.setAttribute("class", className);
    return div;
  }

  // Gives good dimensions to elements
  setStyle() {
    let ratio = this.items.length / this.slidesVisible;
    this.items.forEach(item => {
      item.style.width = ((100 / this.slidesVisible) / ratio) + "%"
    });
    this.container.style.width = (ratio * 100) + "%";
  }

  createNav() {
    let nextButton = this.createDiv("carousel__next");
    let prevButton = this.createDiv("carousel__prev");

    this.root.appendChild(nextButton);
    this.root.appendChild(prevButton);

    nextButton.addEventListener("click", this.next.bind(this));
    prevButton.addEventListener("click", this.prev.bind(this));

  }

  // Navigation methods
  next() {
    this.goToItem(this.currentItem + this.slidesToScroll);

  }

  prev() {
    this.goToItem(this.currentItem - this.slidesToScroll);
  }

  goToItem(index) {

    //Check limits
    if(index < 0) {
      index = this.items.length - this.options.slidesVisible;
    } else if (index >= this.items.length || (this.items[this.currentItem + this.options.slidesVisible] == undefined && index > this.currentItem)) {
      index = 0;
      console.log("hey");
    }

    // animation and update
    let translateX = index * -100 / this.items.length;
    this.container.style.transform = 'translate3d(' + translateX + '%, 0, 0)';
    this.currentItem = index;
  }

  onResize() {
    let mobile = window.innerWidth < 800;
    let tablet = window.innerWidth < 1200;
    if(mobile != this.isMobile) {
      this.isMobile = mobile;
      this.setStyle()
    }
    if(tablet != this.isTablet) {
      this.isTablet = tablet;
      this.setStyle()
    }
  }

  // Responsive getters
  get slidesToScroll() {
    return this.isMobile ? 1 : this.isTablet ? 2 : this.options.slidesToScroll;
  }
  get slidesVisible() {
    return this.isMobile ? 1 : this.isTablet ? 2 : this.options.slidesVisible;
  }
}

// Wait for DOM
document.addEventListener("DOMContentLoaded", function () {

  console.log("dom");

  // Create carousel with parameters
  let carousel = new Carousel(document.querySelector("#carousel1"), {
    slidesToScroll: 1,
    slidesVisible: 3
  })
});