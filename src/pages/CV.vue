<script setup lang="ts">
import Skills from '@/pages/Skills.vue'
</script>

<template>
  <div class="contents">
    <div class="cv">
    <h4 class="subtitle1">CV</h4>

    <h6 class="subtitle4 workexperience">Work Expreience</h6>

    <ul class="cv-list">
      <li class="list-short-text cv-year">2021 - 2023</li>
      <li class="list-short-text edu-school">Fujisoft : System Integrator</li>
      <li class="list-long-text">UX Designer at Sony HCD Division</li>
    </ul>
    <ul class="cv-list">
      <li class="list-short-text cv-year">2020 - 2014</li>
      <li class="list-short-text edu-school">Avanade : System Integrator</li>
      <li class="list-long-text">Experience Designer</li>
    </ul>

    <ul class="cv-list">
      <li class="list-short-text cv-year">2011 - 2013</li>
      <li class="list-short-text edu-school">BP-net : Web production</li>
      <li class="list-long-text">Web Designer, Web Director at NHK (NHK World)</li>
    </ul>
    <ul class="cv-list">
      <li class="list-short-text cv-year">Before </li>
      <li class="list-short-text edu-school">Working at web production company </li>
    </ul>

    <hr style="border:none; margin:2em; ">

    <h6 class="subtitle4 education">Education</h6>
    <ul class="cv-list">
      <li class="list-short-text cv-year">2021</li>
      <li class="list-short-text edu-school">キカガク長期コース</li>
      <li class="list-long-text">AI / Deep Learning study course finished</li>
    </ul>

    <ul class="cv-list">
      <li class="list-short-text cv-year">2021</li>
      <li class="list-short-text edu-school">大原学園 経営管理基礎科<br />(中小企業診断士準備)修了</li>
      <li class="list-long-text">SME management consultants study finished</li>
    </ul>
    <ul class="cv-list">
      <li class="list-short-text cv-year">2018</li>
      <li class="list-short-text edu-school"><font-awesome-icon :icon="['fas', 'arrow-progress']" />IDF Design Thinking Course</li>
      <li class="list-long-text">Empathize / Define / Ideate / Prototype / Test</li>
    </ul>
    <ul class="cv-list">
      <li class="list-short-text cv-year">2018</li>
      <li class="list-short-text edu-school"><font-awesome-icon :icon="['fas', 'arrow-progress']" />IDF Visual Design Course</li>
      <li class="list-long-text">Visualization</li>
    </ul>

    <ul class="cv-list" style="margin-bottom:3em;">
      <li class="list-short-text cv-year">2002</li>
      <li class="list-short-text edu-school">University of Surrey </li>
      <li class="list-long-text">Internet Multimedia and Computing</li>
    </ul>
    
  </div>

  <h6 class="subtitle4 education">Certification</h6>
    <ul class="cv-list">
      <li class="list-short-text">TOEIC 755 </li>
      <li class="list-short-text">IELTS 6.0</li>
      <li class="list-short-text">IT Passport</li>
      <li class="list-short-text">Web Design Creator Certificate (Upper Class)</li>
    </ul>
    <ul class="cv-list">
      <li class="list-short-text">AWS : AWS Cloud Practitioner</li>
      <li class="list-short-text">Azure : AZ-900 MS Azure Fundamentals</li>
      <li class="list-short-text">MS HTML5 and CSS3 Japascript</li>
    </ul>

<hr style="border:none; margin:2em; ">

  <h4 class="subtitle1 cv-skills">Design Certificate</h4>
    <h6 class="subtitle4 certs">HCD (人間中心設計専門家（Certified Human Centered Design Professional)）</h6>
    <ul class="cv-list" style="margin-bottom:3em;">
      <li class="list-short-text skill-name">User Research / HCD Process</li>
      <li class="list-long-text">Affinity Diagram(KJ Method) / Customer Journey Map / Workshop</li>
    </ul>
    
    <h6 class="subtitle4 certs">色彩検定（Test in color coordination）</h6>
    <ul class="cv-list">
      <li class="list-short-text skill-name">2nd Class</li>
      <li class="list-long-text">Color Managemtnt</li>
    </ul>
    <ul class="cv-list">
      <li class="list-short-text skill-name">UC Class</li>
      <li class="list-long-text">Universal Design</li>
    </ul>
    <ul class="cv-list">
      <li class="list-short-text">Google Analytics</li>
    </ul>

    <hr style="border:none; margin:2em; ">
  <div class="cv-skills">
    <Skills />
  </div>


  <div class="self-wrap">
      
      <ul class="about-box-list project-li">
        <li>I am proficient in the following areas:</li>

          <li>Design Thinking / Human-Centered Design Process: I am well-versed in the principles of Design Thinking and Human-Centered Design. These methodologies allow me to empathize with users, understand their needs, and create solutions that truly address their pain points.</li>

            <li>User Research: I have experience conducting user research to gain insights into user behavior, preferences, and requirements. This involves employing various research techniques such as interviews, surveys, and usability testing.</li>

              <li>Front-end Engineering: I possess strong front-end engineering skills, enabling me to create engaging and intuitive user interfaces. I am proficient in HTML, CSS, and JavaScript, and I stay up-to-date with the latest front-end development practices and frameworks.</li>

                <li>Creating Prototypes: I am adept at transforming ideas and concepts into tangible prototypes. Using tools like Adobe XD, Figma, or InVision, I can quickly create interactive prototypes that allow for user feedback and iterative design.</li>

                  <li>Digital Platforms, Cloud (Azure and AWS): I have hands-on experience working with digital platforms and cloud services, particularly Azure and AWS. I can leverage these platforms to develop scalable and secure applications, ensuring optimal performance and reliability.</li>

                    <li>Web/App Development Method (Agile): I am well-versed in Agile methodologies, specifically in the context of web and app development. I am accustomed to working in iterative sprints, collaborating closely with cross-functional teams, and delivering high-quality results within set timelines.</li>

                      <li>Project Management: I have a solid understanding of project management principles and practices. I am skilled at coordinating tasks, managing resources, and ensuring project milestones are met. I have the ability to effectively communicate with stakeholders and adapt to changing project requirements.</li>

                      <li>Please note that the descriptions provided are just brief summaries, and I have a deeper understanding and experience in each of these areas.</li>
        
      
    </ul>
      
      
    </div>
</div>
</template>


