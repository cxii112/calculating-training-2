export const removeClassByClass = (targetsClass: string, value: string) => {
  let targets = document.getElementsByClassName(targetsClass);
  if (targets) {
    for (let i = 0; i < targets.length; i++) {
      targets.item(i)?.classList.remove(value);
    }
  }
};