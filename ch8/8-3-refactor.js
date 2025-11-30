export function renderPerson(person) {
  const result = [];

  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(emitPhotoData(person.photo));

  return result.join("\n");
}

export function photoDiv(photo) {
  return ["<div>", emitPhotoData(photo), "</div>"].join("\n");
}

function emitPhotoData(aPhoto) {
  const result = [];

  result.push(`<p>title: ${person.photo.title}</p>`);
  result.push(`<p>location: ${aPhoto.location}</p>`);
  result.push(`<p>date: ${aPhoto.date.toDateString()}</p>`);

  return result.join("\n");
}

function renderPhoto(aPhoto) {
  return "";
}

// title을 출력하는 로직이 renderPerson, photoDiv 에서 중복되어 있었기 때문에 emitPhotoData에서 처리를 해주었다
