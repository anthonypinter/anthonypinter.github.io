var marked = require('marked');

var bio = {
  shortBio: marked(
    '<p>'
    + 'I am a professor of [Information Science](http://infosci.cornell.edu/) at [Cornell Tech](http://tech.cornell.edu/) where I lead the [Social Technologies](http://stech.nyc) research group. '
    + 'Previously, I was an assistant professor at [Rutgers SC&I](http://comminfo.rutgers.edu/), led a research team at Yahoo! Research Berkeley, and got a [PhD from Stanford](http://infolab.stanford.edu/). '
    + 'Oh, and played professional basketball. '
    + 'I sometimes consult or even co-found startups. '
    + '</p> <p>'
    + 'My lab designs, builds, and studies social systems, with a focus on topics related to Technology, Media and Democracy and the trustworthiness of our information ecosystem. Our sponsors include Yahoo, Google, Facebook and the National Science Foundation. '
    + '</p>'
    + '<b>For prospective PhD students:</b> I will only be considering new students who are committed to working on issues related to Technology, Media and Democracy. Feel free to email me with information about your relevant experience and goals.'
    + '</p>'
    + '<b>Fall 2020:</b> I am teaching version of the Psy Social. Cornell students can [access the course on Canvas](https://canvas.cornell.edu/courses/19147).'
    + '</p>'
  ),
  fullBio: marked(
    '<p>'
    + 'Mor Naaman is a professor of  [Information Science](http://infosci.cornell.edu/) at the [Jacobs Institute](http://jacobs.cornell.edu/) at [Cornell Tech](http://tech.cornell.edu/). He leads a [research group](https://s.tech.cornell.edu/) focused on topics related to the intersection of technology, media and democracy. '
    + 'The group applies multidisciplinary techniques -- from machine learning to qualitative social science -- to study our information ecosystem and its challenges.'
    + '</p> <p>'
    + 'Previously, Mor was on the faculty at the [Rutgers School of Communication and Information](http://comminfo.rutgers.edu/), led a research team at Yahoo! Research Berkeley, received a Ph.D. in Computer Science from the [Stanford University InfoLab](http://infolab.stanford.edu/), and played professional basketball for Hapoel Tel Aviv. '
    + 'He is also a former startup co-founder, and advises startup companies in social computing and related areas. His research is widely recognized, including with an NSF Early Faculty CAREER Award, research awards and grants from numerous corporations, and multiple best paper awards.'
    + '</p> <p>'
    + '</p> <p>'
    + 'If I am speaking at your event, additional high-res headshots are available: [1](https://www.flickr.com/photos/mmoorr/15592772261/sizes/z/) [2](https://www.flickr.com/photos/mmoorr/15516802398/sizes/z/) (I\'ll like you better if you pick the polka dot one).'
    + '</p>'
  )
};

var news = [
  {
    date: '1 Feb 2020',
    title: 'Invited speaker for the Future of the Web track in [The Web Conference 2020](https://www2020.thewebconf.org/), April 23, Taipei (postponed due to Coronavirus)'
  },
  {
    date: '1 Sep 2019',
    title: 'Thank you NSF for a [CHS-Medium award to study AI-Mediated Communication and trust](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1901151&HistoricalAwards=false) with Karen Levy, Malte Jung and Jeff Hancock'
  },
  {
    date: '1 Jul 2019',
    title: 'Started a sabbatical as a visiting researcher at Google in Mountain View, CA'
  },
  {
    date: '1 May 2019',
    title: 'Will be on a [Plenary panel on Future of Media and Misinformation](https://ci.acm.org/2019/#/program/day-1) at Collective Intelligence 2019 in June.'
  },
  {
    date: '11 Aug 2018',
    title: 'NSF EAGER award (with [Yoav](https://yoavartzi.com/), [Shiri](http://shiriazenkot.com/)) to [better understand large-scale patterns of attention to news articles](http://s.tech.cornell.edu/attention)'
  },
  {
    date: '7 May 2018',
    title: 'Report on the succesful first iteration of [Tech, Media and Democracy Course](http://bcexcelsior.com/how-six-nyc-universities-are-fighting-to-defend-journalism-and-democracy/)'
  }
//   {
//     date: '20 Dec 2017',
//     title: 'Congrats to my PhD student Xiao Ma for [Snap Research Honorable Mention](https://snapresearchfellowship.splashthat.com/)!'
//   },
//   {
//     date: '28 Sep 2017',
//     title: 'Launched [Technology Media & Democracy](https://www.techmediademocracy.nyc/) initiative: Six New York City Universities Partner to Defend Independent Media and Journalism'
//   },
//   {
//     date: '25 Aug 2017',
//     title: 'Panel in the celebration of Martha Pollack’s inauguration as Cornell’s 14th president: [Symposium addresses role of truth in universities, society](http://news.cornell.edu/stories/2017/08/symposium-addresses-role-truth-universities-society)'
//   },
//   {
//     date: '30 Mar 2017',
//     title: 'Thanks NSF for an EAGER award to study new ideas in [Indirect Resource Exchange](https://nsf.gov/awardsearch/showAward?AWD_ID=1665169).'
//   },
//   {
//     date: '17 Mar 2017',
//     title: 'Congrats to my 1st year PhD student Matt Law for a NSF Graduate Research Fellowship Honorable Mention.'
//   },
//   {
//     date: '23 Feb 2017',
//     title: '[Received a Google Research Award](https://research.googleblog.com/2017/02/google-research-awards-2016.html) for our work on large-scale patterns of attention. Thanks Google!'
//   },
//   {
//     date: '25 Jan 2017',
//     title: 'My student Xiao Ma recognized as [Facebook PhD Fellowship Finalist](https://research.fb.com/announcing-the-2017-facebook-phd-fellows/)!'
//   },
//   {
//     date: '25 Jan 2017',
//     title: 'Three new upcoming papers at CHI 2017 available from the [pubs page](https://people.jacobs.cornell.edu/mor/#publications) -- on a new kind of community awareness app, measuring attention to news articles, and anonymous social networks.'
//   },
//   {
//     date: '23 Jan 2017',
//     title: 'Our paper on [trustworthiness of profiles on Airbnb](https://s.tech.cornell.edu/assets/papers/ma2017airbnb.pdf) gets a Honorable mention for best paper at CSCW.'
//   }
  //{
  //  date: '30 Oct 2016',
  //  title: 'Four upcoming CSCW papers now available from the pub page. Topic range: Facebook feedback expectations, warranting effects of location tracking in happn, trustworthiness on Airbnb, and limitation in resource sharing platforms.'
  //},
  //{
  //  date: '15 May 2016',
  //  title: 'Honorable mention for best paper at CHI with Nir Grinberg, Alex Dow and Lada Adamic [(paper here)](http://www.nirg.net/papers/contribution2016grinberg.pdf).'
  //},
  //{
  //  date: '12 Apr 2016',
  //  title: 'Giving an [invited talk](http://www.snow-workshop.org/2016/keynotes/), again about my experience working with events in social media, at the WWW SNOW 2016 workshop.'
  //},
  //{
  //  date: '18 Feb 2016',
  //  title: 'I am giving an [invited talk](http://www.wsdm-conference.org/2016/invited-speakers.html#pe-naaman) at WSDM 2016 about my research and startup experiences around events in social media. '
  //},
  //{
  //  date: '10 Feb 2016',
  //  title: 'Two upcoming CHI 2016 papers from my lab are available [here](http://stech.nyc) -- including one best paper honorable mention. '
  //}
  //{
  //  date: '30 Nov 2015',
  //  title: 'My lab is hiring new PhD students this year. To work with us, you can apply to the Cornell [IS](http://infosci.cornell.edu/academics/phd) or [CS](https://www.cs.cornell.edu/phd) PhD programs.'
  //},
  //{
  //  date: '12 Nov 2014',
  //  title: 'AOL [announces](http://blog.aol.com/2014/11/12/aol-launches-connected-experience-lab-with-jacobs-technion-corne/) gift to start Connected Experiences (Conn.X) Laboratory at Jacobs Institute and Cornell Tech, co-founded by me.'
  //}
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
    {
      year: '2020',
      title: 'AI-Mediated Communication: Definition, Research Agenda, and Ethical Considerations',
      author: 'Jeffrey T Hancock, Mor Naaman, Karen Levy',
      source: 'Journal of Computer Mediated Communication 25(1)',
      sourceLink: '',
      paperLink: 'https://academic.oup.com/jcmc/advance-article/doi/10.1093/jcmc/zmz022/5714020?guestAccessKey=97e8ea81-4939-4442-8f4e-c2613e1bbed0'
    }, 
    {
      year: '2020',
      title: 'Towards Measuring Adversarial Twitter Interactions against Candidates in the US Midterm Elections',
      author: 'Yiqing Hua, Thomas Ristenpart, Mor Naaman. ',
      source: 'ICWSM 2020',
      sourceLink: 'https://www.icwsm.org/2020/index.html',
      paperLink: 'http://yiqing-hua.com/papers/adversarial_candidates_icwsm2020.pdf'
    }, 
    {
      year: '2020',
      title: 'Characterizing Twitter Users Who Engage in Adversarial Interactions against Political Candidates',
      author: 'Yiqing Hua, Mor Naaman, Thomas Ristenpart',
      source: 'CHI 2020',
      sourceLink: 'https://chi2020.acm.org/',
      paperLink: 'http://yiqing-hua.com/papers/adversarial_user_chi2020.pdf',
      award: 'Best Paper Honorable Mention'
    },
    {
      year: '2020',
      title: 'The Government`s Dividend: Complex Perceptions of Social Media Misinformation in China',
      author: 'Zhicong Lu, Yue Jiang, Cheng Lu, Mor Naaman, Daniel Wigdor',
      source: 'CHI 2020',
      sourceLink: 'https://chi2020.acm.org/',
      paperLink: 'http://www.cs.umd.edu/~yuejiang/papers/Dividend.pdf'
    }
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
    {
      year: '2019',
      title: 'How Intention Informed Recommendations Modulate Choices: A Field Study of Spoken Word Content',
      author: 'Longqi Yang, Michael Sobolev, Yu Wang, Jenny Chen, Drew Dunne, Christina Tsangouri, Nicola Dell, Mor Naaman, Deborah Estrin',
      source: 'WWW 2019',
      sourceLink: 'https://www2019.thewebconf.org/',
      paperLink: 'http://www.cs.cornell.edu/~ylongqi/paper/YangSWCDTDNE19.pdf'
    },
    {
      year: '2019',
      title: 'When Do People Trust Their Social Groups?',
      author: 'Xiao Ma, Justin Cheng, Shankar Iyer, Mor Naaman',
      source: 'CHI 2019',
      sourceLink: 'https://chi2019.acm.org/',
      paperLink: 'https://arxiv.org/pdf/1905.05270.pdf'
    },
    {
      year: '2019',
      title: 'AI-Mediated Communication: How the Perception that Profile Text was Written by AI Affects Trustworthiness',
      author: 'Maurice Jakesch, Megan French, Xiao Ma, Jeff Hancock, Mor Naaman',
      source: 'CHI 2019',
      sourceLink: 'https://chi2019.acm.org/',
      paperLink: 'https://www.mauricejakesch.com/assets/pdf/chi2019__ai_mc_camera_ready.pdf'
    },
    {
      year: '2019',
      title: 'DejaVu: A System for Journalists to Collaboratively Address Visual Misinformation',
      author: 'Hana Matatov, Adina Bechhofer, Lora Aroyo, Ofra Amir, Mor Naaman',
      source: 'Computation + Journalism',
      sourceLink: 'http://cplusj.org/',
      paperLink: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Matatov_cplusj_dejavu.pdf'
    },    
    {
      title: 'The Role of Source and Expressive Responding in Political News Evaluation',
      author: 'Maurice Jakesch, Moran Koren, Anna Evtushenko, Mor Naaman',
      source: 'Computation + Journalism',
      sourceLink: 'http://cplusj.org/',
      paperLink: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/jakesch_cplusj19__trustnews.pdf'
    },    
    {
      year: '2019',
      title: 'More than Just Words: Modeling Non-textual Characteristics of Podcasts',
      author: 'Longqi Yang, Yu Wang, Drew Dunne, Michael Sobolev, Mor Naaman, Deborah Estrin',
      source: 'WSDM 2019',
      sourceLink: 'http://www.wsdm-conference.org/2019/',
      paperLink: 'http://www.cs.cornell.edu/~ylongqi/paper/YangWDSNE19.pdf'
    },    
    {
      year: '2019',
      title: 'Understanding Image Quality and Trust in Peer-to-Peer Marketplaces',
      author: 'Xiao Ma, Lina Mezghani, Kimberly Wilber, Hui Hong, Robinson Piramuthu, Mor Naaman, Serge Belongie. ',
      source: 'WACV 2019',
      sourceLink: 'http://wacv19.wacv.net/',
      paperLink: 'https://arxiv.org/pdf/1811.10648.pdf'
    }
  ],
  [
    {
      year: '2018',
      title: 'ShareBox: Designing A Physical System to Support Resource Exchange in Local Communities',
      author: 'Matthew Law, Mor Naaman, Nicola Dell',
      source: 'DIS 2018',
      sourceLink: 'http://dis2018.org/',
      paperLink: 'https://s.tech.cornell.edu/assets/papers/sharebox-local-communities.pdf'
    },    
   {
      year: '2018',
      title: 'A Dataset of 1.3 Million Summaries with Diverse Extractive Strategies',
      author: 'Max Grusky, Mor Naaman, Yoav Artzi',
      source: 'NAACL 2018',
      sourceLink: 'http://naacl2018.org/',
      paperLink: 'https://s.tech.cornell.edu/assets/papers/newsroom.pdf'
    },    
    {
      year: '2018',
      title: 'Web-based VR Experiments Powered by the Crowd',
      author: 'Xiao Ma, Megan Cackett, Leslie Park, Eric Chien, Mor Naaman',
      source: 'WWW 2018',
      sourceLink: 'https://www2018.thewebconf.org/',
      paperLink: 'https://arxiv.org/pdf/1802.08345.pdf'
    },
    {
      year: '2018',
      title: 'A Multi-site Investigation of Community Awareness Through Passive Location Sharing',
      author: 'Emily Sun, Mor Naaman',
      source: 'CHI 2018',
      sourceLink: 'https://chi2018.acm.org/',
      paperLink: 'https://s.tech.cornell.edu/assets/papers/location-sharing-sun.pdf'
    }
  ],
  [
    {
      year: '2017',
      title: 'A Computational Approach to Perceived Trustworthiness of Airbnb Host Profiles',
      author: 'Xiao Ma, Trishala Neeraj, Mor Naaman',
      source: 'ICWSM 2017',
      sourceLink: 'http://www.icwsm.org/2017/',
      paperLink: 'http://maxiao.info/assets/computational-airbnb.pdf'
    },
    {
      year: '2017',
      title: 'MoveMeant: Anonymously Building Community Through Shared Location Histories',
      author: 'Emily Sun, Ross McLachlan, Mor Naaman',
      source: 'CHI 2017',
      sourceLink: 'https://chi2017.acm.org/',
      paperLink: 'https://s.tech.cornell.edu/assets/papers/movemeant-note-chi2017.pdf'
    },
    {
      year: '2017',
      title: 'Modeling Sub-Document Attention Using Viewport Time',
      author: 'Max Grusky, Jeiran Jahani, Josh Schwartz, Dan Valente, Yoav Artzi, Mor Naaman',
      source: 'CHI 2017',
      sourceLink: 'https://chi2017.acm.org/',
      paperLink: 'https://s.tech.cornell.edu/assets/papers/viewport-time-chi2017.pdf'
    },
    {
      year: '2017',
      title: '“People Are Either Too Fake or Too Real”: Opportunities and Challenges in Tie-Based Anonymity',
      author: 'Xiao Ma, Nazanin Andalibi, Louise Barkhuus, Mor Naaman',
      source: 'CHI 2017',
      sourceLink: 'https://chi2017.acm.org/',
      paperLink: 'https://s.tech.cornell.edu/assets/papers/secret-qual.pdf'
    },
    {
      year: '2017',
      title: 'Self-disclosure and Perceived Trustworthiness of Airbnb Host Profiles',
      author: 'Xiao Ma, Jeff Hancock, Kenneth Lim Mingjie, Mor Naaman ',
      source: 'CSCW 2017',
      sourceLink: 'https://cscw.acm.org/2017/',
      paperLink: 'https://s.tech.cornell.edu/assets/papers/ma2017airbnb.pdf',
      award: 'Best Paper Honorable Mention'
    },
    {
      year: '2017',
      title: 'What Happens in happn? The Warranting Power of Location History',
      author: 'Xiao Ma, Emily Sun, Mor Naaman',
      source: 'CSCW 2017',
      sourceLink: 'https://cscw.acm.org/2017/',
      paperLink: 'https://s.tech.cornell.edu/assets/papers/making-sense-location_CR.pdf'
    },
    {
      year: '2017',
      title: 'Understanding Feedback Expectations on Facebook',
      author: 'Nir Grinberg, Shankar Kalyanaraman, Lada A. Adamic, Mor Naaman',
      source: 'CSCW 2017',
      sourceLink: 'https://cscw.acm.org/2017/',
      paperLink: 'http://www.nirg.net/papers/feedback_exp.pdf'
    },
    {
      year: '2017',
      title: 'TAMIES: A Study and Model of Adoption in P2P Resource Sharing and Indirect Exchange Systems',
      author: 'Emily Sun, Ross McLachlan, Mor Naaman',
      source: 'CSCW 2017',
      sourceLink: 'https://cscw.acm.org/2017/',
      paperLink: 'https://s.tech.cornell.edu/assets/papers/tamies.pdf'
    }
  ],
  [
    {
      year: '2016',
      title: 'Immersive Recommendation: News and Event Recommendations Using Personal Digital Traces',
      author: 'Cheng-Kang Hsieh, Longqi Yang, Honghao Wei, Mor Naaman, Deborah Estrin',
      source: 'WWW 2016',
      sourceLink: 'http://www2016.ca/',
      paperLink: 'http://www.cs.cornell.edu/~ylongqi/paper/HsiehYWNE16.pdf'
    },
    {
      year: '2016',
      title: 'Anonymity, Intimacy and Self-Disclosure in Social Media',
      author: 'Xiao Ma, Jeff Hancock, Mor Naaman',
      source: 'CHI 2016',
      sourceLink: 'https://chi2016.acm.org/',
      paperLink: 'https://s.tech.cornell.edu/assets/papers/anonymity-intimacy-disclosure.pdf'
    },
    {
      year: '2016',
      title: 'Changes in Engagement Before and After Posting to Facebook',
      author: 'Nir Grinberg, P. Alex Dow, Lada A. Adamic, Mor Naaman',
      source: 'CHI 2016',
      sourceLink: 'https://chi2016.acm.org/',
      paperLink: 'http://www.nirg.net/papers/contribution2016grinberg.pdf',
      award: 'Best Paper Honorable Mention'
    },
    {
      year: '2016',
      title: 'A Data-driven Study of View Duration on YouTube',
      author: 'Minsu Park, Jonah Berger, Mor Naaman',
      source: 'ICWSM 2016',
      sourceLink: 'http://www.icwsm.org/2016/',
      paperLink: 'http://people.jacobs.cornell.edu/mor/publications/thegoods/ParkICWSM2016_YT.pdf'
    }
  ], 
  [
    {
      year: '2015',
      title: 'Editorial Algorithms: Using Social Media to Discover and Report Local News',
      author: 'Raz Schwarz, Mor Naaman, Rannie Teodoro',
      source: 'ICWSM 2015',
      sourceLink: 'http://www.icwsm.org/2015/',
      paperLink: 'http://people.jacobs.cornell.edu/mor/publications/thegoods/Schwartz_ICWSM2015_CityBeat.pdf'
    },
    {
      year: '2015',
      title: 'Understanding Musical Diversity via Online Social Media',
      author: 'Minsu Park, Ingmar Weber, Mor Naaman, Sarah Vieweg',
      source: 'ICWSM 2015',
      sourceLink: 'http://www.icwsm.org/2015/',
      paperLink: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Park_ICWSM2015_MusicalDiversity.pdf'
    },
    {
      year: '2015',
      title: 'On the Accuracy of Hyper-local Geotagging of Social Media Content',
      author: 'David Flatow, Mor Naaman, Ke Eddie Xie, Yana Volkovich, Yaron Kanza',
      source: 'WSDM 2015',
      sourceLink: 'http://www.wsdm-conference.org/2015/',
      paperLink: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/flatow_wsdm2015_geocoding.pdf'
    },
    {
      year: '2015',
      title: 'What Is New in Our City? A Framework for Event Extraction Using Social Media Posts',
      author: 'Chaolun Xia , Jun Hu, Yan Zhu, Mor Naaman',
      source: 'PAKDD 2015',
      sourceLink: 'http://www.pakdd2015.jvn.edu.vn/',
      paperLink: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/xiaCityPAKDD2015.pdf'
    }
  ], 
  [
    {
      year: '2014',
      title: 'Understanding Loneliness in Social Awareness Streams: Expressions and Responses',
      author: 'Funda Kivran-Swaine, Jeremy Ting, Jed Richards Brubaker, Rannie Teodoro, Mor Naaman',
      source: 'ICWSM 2014',
      sourceLink: 'http://www.icwsm.org/2014/',
      paperLink: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/KivranSwaine_ICWSM2014_loneliness.pdf'
    },
    {
      year: '2014',
      title: ' City, Self, Network: Transnational Migrants and Online Identity Work',
      author: 'Jessa Lingel, Mor Naaman, danah boyd',
      source: 'CSCW 2014',
      sourceLink: 'http://cscw.acm.org/2014/',
      paperLink: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Lingel_CSCW2014_migrants.pdf'
    },
    {
      year: '2014',
      title: 'The Motivations and Experiences of the On-demand Mobile Workforce',
      author: 'Rannie Teodoro, Pinar Ozturk, Mor Naaman, Winter Mason, Janne Lindqvist',
      source: 'CSCW 2014',
      sourceLink: 'http://cscw.acm.org/2014/',
      paperLink: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Teodoro_CSCW2014_mobile_workforce.pdf'
    }
  ], 
  [
    {
      year: '2013',
      title: 'Effects of Gender and Tie Strength on Twitter Interactions',
      author: 'Funda Kivran-Swaine, Samuel Brody, Mor Naaman',
      source: 'First Monday',
      paperLink: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/KivranSwaine_1stMonday_EffectsGenderTwitterInteractions.pdf'
    },
    {
      year: '2013',
      title: 'Extracting Diurnal Patterns of Real World Activity from Social Media',
      author: 'Nir Grinberg, Mor Naaman, Blake Shaw, Gilad Lotan',
      source: 'ICWSM 2013',
      sourceLink: 'http://www.icwsm.org/2013/',
      paperLink: 'http://sm.rutgers.edu/pubs/Grinberg-SMPatterns-ICWSM2013.pdf'
    },
    {
      year: '2013',
      title: 'Fitter with Twitter: Understanding Personal Health and Fitness Activity in Social Media',
      author: 'Rannie Teodoro, Mor Naaman',
      source: 'ICWSM 2013',
      sourceLink: 'http://www.icwsm.org/2013/',
      paperLink: 'http://sm.rutgers.edu/pubs/Teodoro-FitterTwitter-ICWSM2013.pdf'
    }
  ], 
  [
      {
      year: '2012',
      title: 'Finding and Assessing Social Media Information Sources in the Context of Journalism',
      author: 'Nicholas Diakopoulos, Mummun  De Choudhury, Mor Naaman',
      source: 'CHI 2012',
      sourceLink: 'https://chi2012.acm.org/',
      paperLink: 'http://www.munmund.net/pubs/chi_2012.pdf',
      award: 'Best Paper Honorable Mention'
    },
    {
      year: '2012',
      title: 'Making a Scene: Alignment of Complete Sets of Clips based on Pairwise Audio Match',
      author: 'Kai Su, Mor Naaman, Avadhut Gurjar, Mohsin Patel, Dan Ellis',
      source: 'ICMR 2012',
      sourceLink: 'http://www.icmr2012.org/',
      paperLink: 'http://sm.rutgers.edu/pubs/su-makingscene-icmr2012.pdf'
    },
    {
      year: '2012',
      title: 'On the Study of Diurnal Urban Routines on Twitter',
      author: 'Mor Naaman, Amy Zhang, Samuel Brody, Gilad Lotan',
      source: 'ICWSM 2012',
      sourceLink: 'http://www.icwsm.org/2012/',
      paperLink: 'http://sm.rutgers.edu/pubs/naaman-twitterpatterns-icwsm2012.pdf'
    },
    {
      year: '2012',
      title: 'Identifying Content for Planned Events Across Social Media Sites',
      author: 'Hila Becker, Dan Iter, Mor Naaman, Luis Gravano',
      source: 'WSDM 2012',
      sourceLink: 'http://wsdm2012.org/',
      paperLink: 'http://sm.rutgers.edu/pubs/becker-events-wsdm2012.pdf'
    },
    {
      year: '2012',
      title: 'Unfolding the Event Landscape on Twitter: Classification and Exploration of User Categories',
      author: 'Munmun De Choudhury, Nicholas Diakopoulos, Mor Naaman',
      source: 'CSCW 2012',
      sourceLink: 'http://www.icwsm.org/2013/',
      paperLink: 'http://sm.rutgers.edu/pubs/dechoudhury-userclassification-cscw2012.pdf'
    },
    {
      year: '2012',
      title: 'Practices of information and secrecy in a punk rock subculture',
      author: 'Jessa Lingel, Aaron Trammell, Joe Sanchez, Mor Naaman',
      source: 'CSCW 2012',
      sourceLink: 'http://cscw2010.org/',
      paperLink: 'http://sm.rutgers.edu/pubs/lingel-secercy-socialmedia-cscw2012.pdf'
    },
    {
      year: '2012',
      title: 'You Should Have Been There, Man: Live Music, DIY Content and Online Communities',
      author: 'Jessa Lingel, Mor Naaman',
      source: 'New Media & Society',
      sourceLink: 'http://nms.sagepub.com/',
      paperLink: 'http://sm.rutgers.edu/pubs/lingel-NMS2011.pdf'
    }
  ], 
  [
    {
      year: '2011',
      title: 'Beyond Trending Topics: Real-World Event Identification on Twitter',
      author: 'Hila Becker, Mor Naaman, Luis Gravano',
      source: 'ICWSM 2011',
      sourceLink: 'http://www.icwsm.org/2011/',
      paperLink: 'http://sm.rutgers.edu/pubs/becker35-icwsm2011.pdf'
    },
    {
      year: '2011',
      title: 'Selecting Quality Twitter Content for Events',
      author: 'Hila Becker, Mor Naaman, Luis Gravano',
      source: 'ICWSM 2011',
      sourceLink: 'http://www.icwsm.org/2011/',
      paperLink: 'http://sm.rutgers.edu/pubs/becker82-icwsm2011.pdf'
    },
    {
      year: '2011',
      title: 'Hip and Trendy: Characterizing Emerging Trends on Twitter',
      author: 'Mor Naaman, Hila Becker, Luis Gravano',
      source: 'JASIST',
      sourceLink: 'http://www.asis.org/jasist.html',
      paperLink: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Naaman2011JasistHipTrendy.pdf'
    },
    {
      year: '2011',
      title: 'The Impact of Network Structure on Breaking Ties in Online Social Networks: Unfollowing on Twitter',
      author: 'Funda Kivran-Swaine, Priya Govindan, Mor Naaman',
      source: 'CHI 2011',
      sourceLink: 'http://chi2011.org/',
      paperLink: 'https://dl.acm.org/authorize?N26250'
    },
    {
      year: '2011',
      title: 'Playable Data: Characterizing the Design Space of Game-y Infographics',
      author: 'Nicholas Diakopoulos, Mor Naaman, Funda Kivran-Swaine',
      source: 'CHI 2011',
      sourceLink: 'http://chi2011.org/',
      paperLink: 'https://dl.acm.org/authorize?N26251'
    },
    {
      year: '2011',
      title: 'Network Properties and Social Sharing of Emotions in Social Awareness Streams',
      author: 'Funda Kivran-Swaine, Mor Naaman',
      source: 'CSCW 2011',
      sourceLink: 'http://cscw2011.org/',
      paperLink: 'https://dl.acm.org/authorize?N26252'
    },
    {
      year: '2011',
      title: 'Towards Quality Discourse in Online News Comments',
      author: 'Nicholas Diakopoulos, Mor Naaman',
      source: 'CSCW 2011',
      sourceLink: 'http://cscw2011.org/',
      paperLink: 'https://dl.acm.org/authorize?N26253'
    }
  ], 
  [
    {
      year: '2010',
      title: 'Social multimedia: highlighting opportunities for search and mining of multimedia data in social media applications',
      author: 'Mor Naaman',
      source: 'MTAPP',
      sourceLink: 'http://www.springer.com/computer/information+systems+and+applications/journal/11042',
      paperLink: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Naaman2010MTAPsocialMultimedia.pdf'
    },
    {
      year: '2010',
      title: 'Diamonds in the Rough: Social Media Visual Analytics for Journalistic Inquiry',
      author: 'Nicholas Diakopoulos, Mor Naaman, Funda Kivran-Swaine',
      source: 'VAST 2010',
      sourceLink: 'http://vis.computer.org/VisWeek2010/vast.html',
      paperLink: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/DiakVast10.pdf'
    },
    {
      year: '2010',
      title: 'Analysis of Participation in an Online Photo-Sharing Community: A Multidimensional Perspective',
      author: 'Oded Nov, Mor Naaman, Chen Ye',
      source: 'JASIST',
      sourceLink: 'http://www.asis.org/jasist.html',
      paperLink: 'http://infolab.stanford.edu/~mor/research/NovNaamanYeJASIST2010.pdf'
    },
    {
      year: '2010',
      title: 'Learning Similarity Metrics for Event Identification in Social Media',
      author: 'Hila Becker, Mor Naaman, Luis Gravano',
      source: 'WSDM 2010',
      sourceLink: 'http://www.wsdm-conference.org/2010/',
      paperLink: 'https://dl.acm.org/authorize?N26265'
    },
    {
      year: '2010',
      title: 'Is it Really About Me? Message Content in Social Awareness Streams',
      author: 'Mor Naaman, Jeff Boase, Chih-Hui Lai',
      source: 'CSCW 2010',
      sourceLink: 'http://www.cscw2010.org/',
      paperLink: 'https://dl.acm.org/authorize?N26254'
    },
    {
      year: '2010',
      title: 'Requirements for Mobile Photoware',
      author: 'Morgan Ames, Dean Eckles, Mor Naaman, Mirjana Spasojevic, Nancy Van House',
      source: 'Personal and Ubiquitous Computing',
      sourceLink: 'http://www.springerlink.com/content/106503/?p=55e89f8ab2c14cba9ec78c759b9e796c&pi=0',
      paperLink: 'http://infolab.stanford.edu/~mor/research/NovNaamanYeJASIST2010.pdf'
    }
  ], [
    {
      year: '2009',
      title: 'Social Inference Risk Modeling in Mobile and Social Applications',
      author: 'Sara Motahari, Sotirios Ziavras, Mor Naaman, Mohamed Ismail, Quentin Jones',
      source: 'PASSAT 2009',
      sourceLink: 'http://cse.stfx.ca/~passat09/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/motahariPASSAT09.pdf'
    },
    {
      year: '2009',
      title: 'Event Identification in Social Media',
      author: 'Hila Becker, Mor Naaman, Luis Gravano',
      source: 'WebDB 2009',
      sourceLink: 'http://webdb09.cse.buffalo.edu/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/beckerWebDB2009.pdf'
    },
    {
      year: '2009',
      title: 'Motivational, Structural and Tenure Factors that Impact Online Community Photo Sharing',
      author: 'Oded Nov, Mor Naaman, Chen Ye',
      source: 'ICWSM 2009',
      sourceLink: 'http://www.icwsm.org/2009/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/Nov_Naaman_Ye_ICWSM_2009_final.pdf',
      award: 'Best Paper Award'
    },
    {
      year: '2009',
      title: 'Less Talk, More Rock: Automated Organization of Community-Contributed Collections of Concert Videos',
      author: 'Lyndon Kennedy, Mor Naaman',
      source: 'WWW 2009',
      sourceLink: 'http://www.www2009.org/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/KennedyLessTalkWWW2009.pdf'
    },
    {
      year: '2009',
      title: 'Methods for extracting place semantics from Flickr tags',
      author: 'Tye Rattenbury, Mor Naaman',
      source: 'ACM Transactions on the Web',
      sourceLink: 'http://tweb.acm.org/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/RattenburyPlacesSemanticsTweb09.pdf'
    },
    {
      year: '2008',
      title: 'ZoneTag\'s Collaborative Tag Suggestions: What is This Person Doing in My Phone?',
      author: 'Mor Naaman, Rahul Nair',
      source: 'IEEE Multimedia',
      sourceLink: 'http://infolab.stanford.edu/~mor/research.html',
      paperLink: 'http://infolab.stanford.edu/~mor/research/ZoneTagIEEEMM.pdf'
    },
    {
      year: '2008',
      title: 'Generating Diverse and Representative Image Search Results for Landmarks',
      author: 'Lyndon Kennedy, Mor Naaman',
      source: 'WWW 2008',
      sourceLink: 'http://www.www2008.org/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/kennedy-www08.pdf'
    },
    {
      year: '2008',
      title: 'Photos on the Go: A Mobile Application Case Study',
      author: 'Mor Naaman, Rahul Nair, Vlad Kaplun',
      source: 'CHI 2008',
      sourceLink: 'http://chi2008.org/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/Naaman-chi08-photosmobile.pdf'
    },
    {
      year: '2008',
      title: 'What Drives Content Tagging: The Case of Photos on Flickr',
      author: 'Oded Nov, Mor Naaman, Chen Ye',
      source: 'CHI 2008',
      sourceLink: 'http://chi2008.org/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/Nov-CHI08-whatdrivestagging.pdf'
    },
    {
      year: '2007',
      title: 'How Flickr Helps us Make Sense of the World: Context and Content in Community-Contributed Media Collections.',
      author: 'Lyndon Kennedy, Mor Naaman, Shane Ahern, Rahul Nair, Tye Rattenbury',
      source: 'ACM Multimedia 2007',
      sourceLink: 'http://mmc36.informatik.uni-augsburg.de/acmmm2007/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/kennedyMM07.pdf'
    },
    {
      year: '2007',
      title: 'Zurfer: Mobile Multimedia Access in Spatial, Social and Topical Context',
      author: 'Amy Hwang, Shane Ahern, Simon King, Mor Naaman, Rahul Nair, Jeannie Yang',
      source: 'ACM Multimedia 2007',
      sourceLink: 'http://mmc36.informatik.uni-augsburg.de/acmmm2007/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/hwang-mm07-zurfer.pdf'
    },
    {
      year: '2007',
      title: 'Towards Automatic Extraction of Event and Place Semantics from Flickr Tags',
      author: 'Tye Rattenbury, Nathan Good, Mor Naaman',
      source: 'SIGIR 2007',
      sourceLink: 'http://www.sigir2007.org/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/sigir2007rattenburyTagSemantics.pdf'
    },
    {
      year: '2007',
      title: 'World Explorer: Visualizing Aggregate Data from Unstructured Text in Geo-Referenced Collections',
      author: 'Shane Ahern, Mor Naaman, Rahul Nair, Jeannie Yang',
      source: 'JCDL 2007',
      sourceLink: 'http://www.jcdl2007.org/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/JCDL07-ahern-WorldExplorer.pdf',
      award: 'Vannevar Bush Best Paper Award'
    },
    {
      year: '2007',
      title: 'Why We Tag: Motivations for Annotation in Mobile and Online Media',
      author: 'Morgan Ames, Mor Naaman',
      source: 'CHI 2007',
      sourceLink: 'http://chi2007.org/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/chi2007-Ames-whyWeTag.pdf'
    },
    {
      year: '2007',
      title: 'Over-Exposed? Privacy Patterns and Considerations in Online and Mobile Photo Sharing',
      author: 'Shane Ahern, Dean Eckles, Nathan Good, Simon King, Mor Naaman, Rahul Nair',
      source: 'CHI 2007',
      sourceLink: 'http://chi2007.org/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/chi241-ahern-mediaprivacy.pdf'
    },
    {
      year: '2006',
      title: '(Invited column) Eyes on the World',
      author: 'Mor Naaman',
      source: 'IEEE Computer Magazine',
      paperLink: 'http://infolab.stanford.edu/~mor/research/naamanComp06.pdf'
    },
    {
      year: '2006',
      title: 'Generating Summaries and Visualization for Large Collections of Geo-Referenced Photographs',
      author: 'Alexander Jaffe, Mor Naaman, Tamir Tassa, Marc Davis',
      source: 'MIR 2006',
      sourceLink: 'http://riemann.ist.psu.edu/mir2006/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/mir609-jaffe.pdf'
    },
    {
      year: '2006',
      title: 'HT06, Tagging Paper, Taxonomy, Flickr, Academic Article, ToRead',
      author: 'Cameron Marlow, Mor Naaman, danah boyd, Marc Davis',
      source: 'HYPERTEXT 2006',
      sourceLink: 'http://ht06.org/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/MarlowHT06.pdf'
    },
    {
      year: '2005',
      title: 'Leveraging Geo-Referenced Digital Photographs',
      author: 'Mor Naaman',
      source: 'Ph.D. Thesis',
      paperLink: 'http://infolab.stanford.edu/~mor/research/naamanthesis.pdf',
      extraInfo: 'For a shoter read: [Introduction Only](http://infolab.stanford.edu/~mor/research/naamanthesisintro.pdf)'
    },
    {
      year: '2005',
      title: 'Leveraging Context to Resolve Identity in Photo Albums',
      author: 'Mor Naaman, Ron B. Yeh, Hector Garcia-Molina, Andreas Paepcke',
      source: 'JCDL 2005',
      sourceLink: 'http://www.jcdl2005.org/',
      paperLink: 'http://dbpubs.stanford.edu/pub/2005-10'
    },
    {
      year: '2005',
      title: 'Assigning Textual Names to Sets of Geographic Coordinates',
      author: 'Mor Naaman, Yee Jiun Song, Andreas Paepcke, Hector Garcia-Molina',
      source: 'Journal of Computers, Environment, and Urban Systems',
      sourceLink: 'http://www.sciencedirect.com/science/journal/01989715',
      paperLink: 'http://dbpubs.stanford.edu/pub/2005-18'
    },
    {
      year: '2004',
      title: 'Context Data in Geo-Referenced Digital Photo Collections',
      author: 'Mor Naaman, Susumu Harada, QianYing Wang, Hector Garcia-Molina, Andreas Paepcke',
      source: 'ACM Multimedia 2004',
      sourceLink: 'http://www.mm2004.org/',
      paperLink: 'http://dbpubs.stanford.edu/pub/2004-43'
    },
    {
      year: '2004',
      title: 'Adventures in Space and Time: Browsing Personal Collections of Geo-Referenced Digital Photographs',
      author: 'Mor Naaman, Susumu Harada, QianYing Wang, Andreas Paepcke',
      source: 'Stanford Technical Report',
      paperLink: 'http://dbpubs.stanford.edu/pub/2004-26'
    },
    {
      year: '2004',
      title: 'Automatic Organization for Digital Photographs with Geographic Coordinates',
      author: 'Mor Naaman, Yee Jiun Song, Andreas Paepcke, Hector Garcia-Molina',
      source: 'JCDL 2004',
      sourceLink: 'http://www.jcdl2004.org/',
      paperLink: 'http://dbpubs.stanford.edu/pub/2004-27',
      award: 'Vannevar Bush Best Paper Award'
    },
    {
      year: '2004',
      title: 'Lost in Memories: Interacting With Large Photo Collections on PDAs',
      author: 'Susumu Harada, Mor Naaman, Yee Jiun Song, QianYing Wang, Andreas Paepcke',
      source: 'JCDL 2004',
      sourceLink: 'http://www.jcdl2004.org/',
      paperLink: 'http://dbpubs.stanford.edu/pub/2004-31',
    },
    {
      year: '2003',
      title: 'From Where to What: Metadata Sharing for Digital Photographs with Geographic Coordinates',
      author: 'Mor Naaman, Andreas Paepcke, Hector Garcia-Molina',
      source: 'COOPIS 2003',
      sourceLink: 'http://www.cs.rmit.edu.au/fedconf/coopis/2003/',
      paperLink: 'http://dbpubs.stanford.edu/pub/2003-62'
    }
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
