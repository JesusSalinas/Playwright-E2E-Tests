export function checkNumberOfTodosInLocalStorage(page: any, expected: number) {
  return page.waitForFunction((e: any) => {
    return JSON.parse(localStorage['react-todos']).length === e;
  }, expected);
}

export function checkNumberOfCompletedTodosInLocalStorage(page: any, expected: number) {
  return page.waitForFunction(e => {
    return JSON.parse(localStorage['react-todos']).filter((i: { completed: any; }) => i.completed).length === e;
  }, expected);
}

export function checkTodosInLocalStorage(page: any, title: string) {
  return page.waitForFunction((t: any) => {
    return JSON.parse(localStorage['react-todos']).map((i: { title: any; }) => i.title).includes(t);
  }, title);
}