// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-alec-received-nih-t32-training-grant-in-cognitive-neuroscience-support-for-his-phd-studies",
          title: 'Alec received NIH T32 training grant in Cognitive Neuroscience support for his PhD...',
          description: "",
          section: "News",},{id: "news-alec-presented-his-work-at-the-2023-sfn-in-washington-d-c",
          title: 'Alec presented his work at the 2023 SfN in Washington, D.C.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/SfN_2023.html";
            },},{id: "news-alec-received-nih-t32-training-grant-in-cognitive-neuroscience-support-for-his-phd-studies",
          title: 'Alec received NIH T32 training grant in Cognitive Neuroscience support for his PhD...',
          description: "",
          section: "News",},{id: "news-alec-presented-his-work-at-the-2024-snl-conference-in-brisbane-australia",
          title: 'Alec presented his work at the 2024 SNL Conference in Brisbane, Australia!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/SNL_2024.html";
            },},{id: "news-alec-presented-his-work-on-quot-aspects-of-speech-production-represented-in-inferior-frontal-gyrus-quot-at-the-2025-bci-meeting-in-banff-canada",
          title: 'Alec presented his work on &amp;quot;Aspects of speech production represented in inferior frontal...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/BCI_society_meeting_2025.html";
            },},{id: "news-alec-started-data-science-internship-in-ai-amp-amp-informatics-at-mayo-clinic-working-on-building-and-evaluating-foundation-models-for-multimodal-healthcare-data",
          title: '🎉 Alec started Data Science Internship in AI &amp;amp;amp; Informatics at Mayo Clinic,...',
          description: "",
          section: "News",},{id: "news-congratulation-to-alec-on-his-first-author-paper-published-at-nature-you-can-check-out-the-full-paper-here-or-if-you-want-to-read-the-digest-on-either-x-twitter-or-linkedin",
          title: '🎉 Congratulation to Alec on his first author paper published at Nature! You...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%69%61%6E%68%61%6F%6C%65%69%32%30%31%39@%75.%6E%6F%72%74%68%77%65%73%74%65%72%6E.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/caraido", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/tianhao-lei", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-5563-7418", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
