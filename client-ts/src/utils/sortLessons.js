export default function sortLessons(lessonArr) {
  return lessonArr.sort((a, b) => {
      return Date.parse(a.date) - Date.parse(b.date);
  })
}

