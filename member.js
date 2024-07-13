function skillsMember() {
  var member = document.getElementById('skills-member');
  var skills = document.getElementById('skills');
  var skillsMember = document.getElementById('skills-member');
  var skillsMemberHeight = skillsMember.offsetHeight;

  if (member.checked) {
    skills.style.height = skillsMemberHeight + 'px';
  } else {
    skills.style.height = 0;
  }
}