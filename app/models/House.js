export class House {
  constructor(data) {
    this.bathrooms = data.bathrooms
    this.bedrooms = data.bedrooms
    this.createdAt = data.createdAt
    this.creator = data.creator
    this.creatorId = data.creatorId
    this.description = data.description
    this.imgUrl = data.imgUrl
    this.levels = data.levels
    this.price = data.price
    this.updatedAt = data.updatedAt
    this.year = data.year
    this.id = data._id

  }

  get houseCard() {
    return `
      <div class="col-12 mt-3">
    <div class="row bg-light shadow car-border" style="border-color: black;">
      <div class="col-md-4 ps-0">
        <img src="${this.imgUrl}"
          alt="picture of house" class="car-img">
      </div>
      <div class="col-md-8">
        <div class="d-flex flex-column justify-content-between h-100">
          <div>
            <p class="fs-3 mb-1">${this.year} $${this.price.toLocaleString()}</p>
            <small>Listed on ${this.createdAt}</small>
            <div class="mt-1">
              <p class="fs-5">Bedrooms: ${this.bedrooms}</p>
              <p class="fs-5">Bathrooms: ${this.bathrooms}</p>
              <p class="fs-5">Floors: ${this.levels}</p>
            </div>
            <p>${this.description}</p>
          </div>
            <div>
                <img src="${this.creator.picture}" alt="${this.creator.name}" class="creator-img">
                <span>${this.creator.name}</span>
              </div>
          <div class="text-end mb-1">
            <button class="btn btn-outline-danger">
              Delete House
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
    `
  }
}