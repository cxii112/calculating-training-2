export const toggleClassById = (targetId: string, value: string) => {
  let target: HTMLElement | null = document.getElementById(targetId);
  if (target) target.classList.toggle(value);
}