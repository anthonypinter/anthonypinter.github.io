var marked = require('marked');

var bio = {
  shortBio: marked(
    '<p>'
    + 'I am a PhD Candidate in Information Sceince at the University of Colorado Boulder'
    + 'I work with Jed Brubaker and the Identity Lab. '
    + 'My research focuses on understanding the experiences have during life transitions and how those experiences are represented in sociotechnical systems. '
    + 'I am particularly interested in how people navigate the digital connections that are left in the wake of a romantic break-up. '
    + '</p>'
    + 'I concurrently hold a position as Adjunct Faculty in the College of Information Sciences and Technology, where I teach through the Penn State World Campus program.'
    + 'I am also the Curriculum Coordinator for the iSchool Inclusion Institute. '
    + '</p>'
    + 'For more information, see my CV.'
    + '</p>'
  ),
  fullBio: marked(
    '<p>'
    + 'I am a PhD Candidate in Information Sceince at the University of Colorado Boulder'
    + 'I work with Jed Brubaker and the Identity Lab. '
    + 'My research focuses on understanding the experiences have during life transitions and how those experiences are represented in sociotechnical systems. '
    + 'I am particularly interested in how people navigate the digital connections that are left in the wake of a romantic break-up. '
    + '</p>'
    + 'I concurrently hold a position as Adjunct Faculty in the College of Information Sciences and Technology, where I teach through the Penn State World Campus program.'
    + 'I am also the Curriculum Coordinator for the iSchool Inclusion Institute. '
    + '</p>'
    + 'For more information, see my CV.'
    + '</p>'
  )
};

var news = [
  {
    date: '1 Feb 2021',
    title: 'Test'
  },

].map(function(n) {
  n.title = marked(n.title);
  return n;
});

var publications = [
  [
    {
      year: '2020',
      title: 'How Partisan Crowds Affect News Evaluation',
      author: 'Maurice Jakesch, Moran Koren, Anna Evtushenko, Mor Naaman',
      source: 'Truth and Trust Online (TTO) 2020',
      sourceLink: 'https://truthandtrustonline.com/',
      paperLink: ''
    },
  ],
  [
    {
      year: '2019',
      title: 'Understanding Reader Backtracking Behavior in Online News Articles',
      author: 'Uzi Smadja, Max Grusky, Yoav Artzi, Mor Naaman',
      source: 'WWW 2019',
      sourceLink: 'https://www2019.thewebconf.org/',
      paperLink: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/smadja_webconf_backtracking.pdf'
    },
  ]
].map(function(n) {
  return n.map(function(m) {
    if (m.extraInfo) {
      m.extraInfo = marked(m.extraInfo);
    }
    return m;
  });
});

module.exports = {
  bio: bio,
  news: news,
  publications: publications
};
