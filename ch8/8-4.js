function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`);

  renderPhoto(outStream, person.photo);

  emitPhotoData(outStream, person.photo);
}

function listRecentPhotos(outStream, photos) {
  photos
    .filter((p) => p.date > recentDateCutoff())
    .forEach((p) => {
      outStream.write("<div>\n");
      emitPhotoData(outStream, p);
      outStream.write("</div>\n");
    });
}

// emitPhotoData이 renderPerson, listRecentPhotos에서 모두 사용되고 있었는데
// 시간이 지니면서 각 함수에서 location을 출력하는 방식이 변경되었다
function emitPhotoData(outStream, photo) {
  outStream.write(`<p>title: ${photo.title}</p>\n`);
  outStream.write(`<p>date: ${photo.date.toDateString()}</p>\n`);
  outStream.write(`<p>location: ${photo.location}</p>\n`);
}

function renderPhoto(outStream, aPhoto) {
  outStream.write("");
}

function recentDateCutoff() {
  //7 days ago.
  return new Date().setDate(new Date().getDate() - 7);
}
