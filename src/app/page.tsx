'use client';

import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Arishith Pakalapati
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Full Stack Developer
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Java Full Stack Developer with 3+ years of experience in designing, developing, and maintaining web applications.
            </motion.p>
            <motion.div
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.a
                href="#contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDownIcon className="h-8 w-8 text-gray-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I am an accomplished and experienced Java Full Stack Developer with over 3+ years of experience in designing, developing, and maintaining web applications and services. I am proficient in Java, Spring Boot, React, and modern DevOps practices.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I have demonstrated expertise in leading development teams, architecting scalable solutions, and collaborating with cross-functional teams to deliver robust and high-performance applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Work Experience
          </motion.h2>
          <motion.div 
            className="max-w-4xl mx-auto space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* DOUBELENE USA */}
            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold mb-2">Software Engineer - DOUBELENE USA</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Jul 2023 - Present</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Developed a Transaction Processing Service using Spring Boot microservices architecture, handling payment processing and account transfers for a large financial client</li>
                <li>Implemented event-driven architecture using Apache Kafka for real-time communication between microservices, ensuring system reliability and scalability</li>
                <li>Built responsive Single Page Applications using React, improving load times by 25% and enhancing user experience during peak traffic</li>
                <li>Set up CI/CD pipelines with Jenkins and Docker, automating the entire software development lifecycle and reducing deployment time</li>
                <li>Implemented Kubernetes for container orchestration, ensuring high availability and automatic scaling of services</li>
                <li>Conducted rigorous unit testing with JUnit and Mockito, maintaining high code quality and reliability standards</li>
              </ul>
            </motion.div>

            {/* PRODAPT India */}
            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold mb-2">Software Engineer - PRODAPT India</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Mar 2022 - May 2022</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Designed and implemented interactive frontend for telecommunications project using React, enhancing user engagement</li>
                <li>Deployed applications on cloud infrastructure using Docker and Kubernetes, improving deployment efficiency by 50%</li>
                <li>Implemented JPA and Hibernate for ORM, reducing query processing time by 30%</li>
                <li>Applied OAuth2 and JWT for security, reducing vulnerabilities by 50%</li>
              </ul>
            </motion.div>

            {/* TECHECY India */}
            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold mb-2">Software Engineer - TECHECY India</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Mar 2020 - Feb 2022</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Developed high-performance REST APIs using Spring Boot and MVC frameworks</li>
                <li>Contributed to &quot;Nancy Kiberman&quot; project, implementing real-time updates using WebSockets</li>
                <li>Built RESTful APIs Using Node.Js, improving data retrieval by 25%</li>
                <li>Integrated real-time features with WebSockets and Socket.IO, reducing response time by 35%</li>
                <li>Automated CI/CD pipelines with Jenkins and GitLab CI, streamlining deployment process</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Resume Analyzer using AI */}
            <motion.div 
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-4">Resume Analyzer using AI</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                AI-powered resume analysis tool that provides detailed insights and recommendations for job applications using advanced NLP techniques.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">Supabase</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">AI</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">NLP</span>
              </div>
              <motion.a
                href="https://github.com/arshith4401/resume_analyzer_using_AI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                whileHover={{ x: 5 }}
              >
                View Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Chat with PDF */}
            <motion.div 
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-4">Chat with PDF</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Interactive PDF chat application that allows users to ask questions about PDF documents and get AI-powered responses.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">Supabase</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">AI</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">NLP</span>
              </div>
              <motion.a
                href="https://github.com/arshith4401/chat_with_pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                whileHover={{ x: 5 }}
              >
                View Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Horizon Airlines */}
            <motion.div 
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-4">Horizon Airlines Bookings</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A comprehensive airline management system built with Flask and MongoDB, featuring user authentication, flight booking, promo code system, and data visualization. Includes real-time flight tracking and interactive booking management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">Flask</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">Docker</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">Data Visualization</span>
              </div>
              <motion.a
                href="https://github.com/praneethravuri/Horizon-Airlines-Bookings"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                whileHover={{ x: 5 }}
              >
                View Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </motion.div>

            {/* SWE 645 - Cloud-Native Web Application */}
            <motion.div 
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-4">Cloud-Native Web Application</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Developed a full-stack web application with React frontend and Spring Boot backend, containerized with Docker, and deployed on AWS EC2 using Rancher for Kubernetes orchestration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">Spring Boot</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">Docker</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">AWS EC2</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">Kubernetes</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">Rancher</span>
              </div>
              <motion.a
                href="https://github.com/arshith4401/swe645hw3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                whileHover={{ x: 5 }}
              >
                View Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Student Survey GMU */}
            <motion.div 
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-4">Student Survey GMU</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Full-stack web application for conducting and analyzing student surveys at George Mason University, featuring real-time data collection and visualization.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">Spring Boot</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">Angular</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">HTML/CSS</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">RESTful API</span>
              </div>
              <motion.a
                href="https://github.com/arshith4401/studentsurvey_gmu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                whileHover={{ x: 5 }}
              >
                View Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </motion.div>

            {/* CryptoCurrency Price Prediction */}
            <motion.div 
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-4">CryptoCurrency Price Prediction</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Advanced cryptocurrency price prediction system using sentiment analysis, ARIMA algorithm, and deep learning techniques including LSTM and RNN.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">LSTM</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">RNN</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">ARIMA</span>
              </div>
              <motion.a
                href="https://github.com/arshith4401/CryptoCurrency-Price-prediction"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                whileHover={{ x: 5 }}
              >
                View Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills
          </motion.h2>
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <motion.div 
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold mb-4">Languages</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Java</li>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>HTML/CSS</li>
                </ul>
              </motion.div>
              <motion.div 
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold mb-4">Frameworks</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Spring Boot</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>AngularJS</li>
                  <li>.NET Framework</li>
                </ul>
              </motion.div>
              <motion.div 
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold mb-4">Tools & Technologies</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>AWS</li>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>Jenkins</li>
                  <li>Git</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h2>
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://github.com/arshith4401"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
              <motion.a
                href="mailto:arishith.gmu@gmail.com"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = 'mailto:arishith.gmu@gmail.com?subject=Portfolio Contact';
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Email
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
