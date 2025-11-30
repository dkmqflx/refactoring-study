/**
 * outStream.write(`<p>location: ${photo.location}</p>\n`);을
 * 호출 하는 함수에서 추가해주도록 한다
 */

function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`);

  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);

  outStream.write(`<p>location: ${photo.location}</p>\n`);
}

function listRecentPhotos(outStream, photos) {
  photos
    .filter((p) => p.date > recentDateCutoff())
    .forEach((p) => {
      outStream.write("<div>\n");
      emitPhotoData(outStream, p);

      outStream.write(`<p>위치!: ${photo.location}</p>\n`); // renderPerson와 다른 방식으로 위치 정보 출력

      outStream.write("</div>\n");
    });
}

function emitPhotoData(outStream, photo) {
  outStream.write(`<p>title: ${photo.title}</p>\n`);
  outStream.write(`<p>date: ${photo.date.toDateString()}</p>\n`);
}

function renderPhoto(outStream, aPhoto) {
  outStream.write("");
}

function recentDateCutoff() {
  //7 days ago.
  return new Date().setDate(new Date().getDate() - 7);
}
