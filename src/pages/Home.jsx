import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="p-6 md:p-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <motion.h1
          className="text-5xl md:text-7xl font-bold"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Aman Kashniyal
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          B.Tech Student | Web & ML Developer | Life-long Learner
        </motion.p>
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button asChild>
            <a href="/resume.pdf" target="_blank">
              View Resume
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="#projects">My Projects</a>
          </Button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="space-y-4 max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl font-semibold"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          I’m Aman Kashniyal from Pithoragarh, Uttarakhand, currently pursuing B.Tech at
          Graphic Era Hill University. I'm passionate about web development and machine learning,
          and I aim to live a healthy and prosperous life while learning and building cool stuff.
        </motion.p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="space-y-6">
        <motion.h2
          className="text-3xl font-semibold text-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">🍃 Mango Leaf Disease Detector</h3>
                <p className="mt-2 text-muted-foreground">
                  A machine learning project to classify mango leaf diseases using image processing
                  and neural networks.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">❤️ Heart Disease Predictor</h3>
                <p className="mt-2 text-muted-foreground">
                  Built a prediction model using logistic regression and other algorithms to identify
                  heart disease risk.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">🌐 Personal Portfolio</h3>
                <p className="mt-2 text-muted-foreground">
                  A dynamic, responsive site showcasing my projects, blog, resume, and more.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="space-y-4 max-w-2xl mx-auto">
        <motion.h2
          className="text-3xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Feel free to reach out to me via email or connect with me on GitHub.
        </motion.p>
        <ul className="list-disc pl-5 text-muted-foreground">
          <li>Email: amankashniyal123@gmail.com</li>
          <li>
            GitHub: <a href="https://github.com/aman-kashniyal" className="underline">@aman-kashniyal</a>
          </li>
        </ul>
      </section>
    </main>
  );
}
