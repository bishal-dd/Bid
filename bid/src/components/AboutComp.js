import React from "react";

export default function AboutComp() {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://thewell.unc.edu/wp-content/uploads/sites/1007/2022/07/summer.playlist.hero_.shutterstock-scaled-e1660067871311.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a238a65-08a0-4e04-bd6a-9429adeec626/d627cph-844b452e-ed80-481f-aa91-0d31883a16e3.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBhMjM4YTY1LTA4YTAtNGUwNC1iZDZhLTk0MjlhZGVlYzYyNlwvZDYyN2NwaC04NDRiNDUyZS1lZDgwLTQ4MWYtYWE5MS0wZDMxODgzYTE2ZTMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.APRcf-fRTWoIih1I0VkRSbeHzgieCjkylFPvnJqi5Ww"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://toppng.com/uploads/preview/cool-backgrounds-hd-11553722962xmab2pqpcv.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
