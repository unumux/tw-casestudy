"use client";

import Card from "@/components/Card";
import Code from "@/components/Code";
import Content from "@/components/Content";
import Frame from "@/components/Frame";
import Highlight from "@/components/Highlight";
import React, { useState, useEffect } from "react";
// Ensure that Content and Highlight are default exports and their props match usage

export default function Home() {
  const [brand, setBrand] = useState<"unum" | "colonial">("unum");

  useEffect(() => {
    document.body.className = brand;
  }, [brand]);

  return (
    <>
      <div className="p-2 top-0 left-0 text-flat_white unum:bg-unum-blue colonial:bg-colonial-steelblue text-white selector mb-4">
        <label className="mr-4">
          <input
            className="mr-2"
            type="radio"
            name="brand"
            value="unum"
            checked={brand === "unum"}
            onChange={() => setBrand("unum")}
          />
          <span>Unum</span>
        </label>
        <label>
          <input
            className="mr-2"
            type="radio"
            name="brand"
            value="colonial"
            checked={brand === "colonial"}
            onChange={() => setBrand("colonial")}
          />
          <span>Colonial Life</span>
        </label>
      </div>
      <main>
        <section className="page">
          <Frame type="two-col">
            <Highlight
              darkGroup="unum:bg-unum-orange_4 colonial:bg-colonial-orange_3"
              lightGroup="unum:bg-unum-berryred colonial:bg-colonial-berryred_3"
            >
              <Card
                title="Tailwind CSS Demo"
                description="This is a demonstration of Tailwind CSS in action, showcasing its utility-first approach"
              ></Card>
            </Highlight>
          </Frame>
          <Frame type="col">
            <Content
              heading="Welcome to the Tailwind Demo"
              content="This presentation highlights the benefits of using Tailwind CSS for our component styling and to carry it foward into the Sitecore JSS world. This entire project was created with Next and Tailwind CSS - with a majority of the time spent integrating the Theming, colors, spacing and fonts across both brands. The upside to this is that this project's configuration can be directly pushed into our project with little to 0 overhead and work in our projet how it works in this one."
            >
              <Highlight
                darkGroup="unum:bg-unum-slate_4 colonial:bg-colonial-steelblue_3"
                lightGroup="unum:bg-unum-sky_3 colonial:bg-colonial-teal_3"
              >
                <Content
                  heading="Why Tailwind and why now?"
                  content="We have discussed Tailwind implementation and have opted to use CSS Modules to this point. So why change now? I ask that you fully take in the informatiom, follow the links to the documentation and deeply consider your position."
                />
                <p className="font-bold text-theme">
                  It should be noted that this presentation is not a suggestion
                  to REPLACE the use of CSS Modules, but rather use CSS MOdules
                  as compliment to Tailwind.{" "}
                  <a
                    href="https://dev.to/andriy_ovcharov_312ead391/css-architecture-2025-is-tailwind-a-must-have-or-just-hype-jed"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    This article
                  </a>{" "}
                  is a great read that shares more pros and cons in a general
                  sense.
                </p>
                <Frame type="two-col">
                  <Highlight
                    darkGroup="unum:bg-unum-kiwi colonial:bg-colonial-leaf_4"
                    lightGroup="unum:bg-unum-kiwi_2 colonial:bg-colonial-leaf_2"
                  >
                    <Content heading="Benefits Overview" content="" />
                    <ul>
                      <li>Faster conversion to JSS</li>
                      <li>Speed of new development</li>
                      <li>Performance increases</li>
                      <li>Obfuscation of common patterns</li>
                      <li>Writing Custom CSS is still valid</li>
                      <li>This is the modern approach</li>
                    </ul>
                  </Highlight>
                  <Highlight
                    darkGroup="unum:bg-unum-berryred colonial:bg-colonial-berryred"
                    lightGroup="unum:bg-unum-berryred_l1 colonial:bg-colonial-berryred_l1"
                  >
                    <Content heading="Drawbacks Overview" content="" />
                    <ul>
                      <li>"Reworking" Again</li>
                      <li>Project Dependency</li>
                      <li>Learning Curve</li>
                      <li>Verbose Class Names</li>
                    </ul>
                  </Highlight>
                </Frame>
                <Frame type="col">
                  <Highlight
                    darkGroup="unum:bg-unum-blue_4 colonial:bg-colonial-steelblue"
                    lightGroup="unum:bg-unum-pool_2 colonial:bg-colonial-mint_1"
                  >
                    <Content
                      heading="Benefits"
                      content="Below is a list of benefits and features that Tailwind provides to our project, with specific use cases in mind."
                    >
                      <ul>
                        <li>
                          <span className="font-bold">
                            Faster conversion to JSS
                          </span>
                          <p>
                            One of the biggest draws to Tailwind CSS is the
                            dramatic cut down on context switching. In our case,
                            context switching is going to refer to the need to
                            constantly switch to a module CSS file, finding that
                            variable name somewhere up the tree, or needing to
                            refer to some other class to replicate the styles in
                            a different component. Because Tailwind is utility
                            first, we don&apos;t have to worry about any of the
                            context switching issue nor scoping issues arising
                            due to incompatiable compositions, specificity
                            issues or devising a naming convention to tain order
                            in our CSS.
                          </p>
                          <p className="font-bold">
                            It is absolutely worth noting that with Tailwind,
                            the great reliance on CoPilot to unwind logic from
                            SASS is vastly reduced. Replication of styles belong
                            to the element, not the cascade - this means you can
                            1:1 what is currently in production BY HAND almost
                            undoubtedly faster and more accurately than having
                            copilot generate a module with it&apos;s assumptions
                            derived from mixin and SASS variable usage. This is
                            a critical point in the conversation! The need to
                            reverse-engineer and re-engineer styles for any
                            given component is twice the work, which means
                            Tailwind realistically, yet anectdotally, can
                            provide up to 4x the speed of development.
                          </p>
                        </li>
                        <li>
                          <span className="font-bold">
                            Speed of new development
                          </span>
                          <p>
                            According to Tailwind Labs, several companies saw 2x
                            gains in development time. Additionally, articles
                            like{" "}
                            <a href="https://dev.to/philw_/companies-using-utility-first-css-for-example-tailwind-in-production-75f">
                              this one
                            </a>{" "}
                            show that several major tech companies like
                            Microsoft, Shopify, Netflix, Stack Overflow, Medium
                            and the NBA have all switched to utility first
                            frameworks to speed delivery.
                          </p>
                        </li>
                        <li>
                          <span className="font-bold">
                            Performance increases
                          </span>
                          <p>
                            Tailwind integrates with PostCSS to only deliver the
                            CSS your page needs. This works in culmination with
                            a safelist, that allows us to dictate specifically
                            what variables we want to always build while
                            allowing all other CSS to be purged if not used.
                            Many reports have suggested a 70-90% decrease in CSS
                            bundle sizes due to purging.
                          </p>
                        </li>
                        <li>
                          <span className="font-bold">
                            Obfuscation of common patterns
                          </span>
                          <p>
                            Do you hate making dropdowns? Tired of writing giant
                            selectors? Don&apos;t want to apply margin-top to
                            everything under the sun?
                          </p>
                          <p>
                            In this project, there is real-world demonstrations
                            of how Tailwind makes life easier. Below is a few of
                            my favorites:
                          </p>
                          <ul>
                            <li>
                              <p>
                                <a
                                  href="https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state"
                                  target="_blank"
                                >
                                  Group Documentation
                                </a>
                              </p>
                              <Code>group group:hover-underline</Code>
                              <p>
                                Group allows you to flag an element to
                                &quot;group&quot; it with another element to
                                create interactions between the 2 elements,
                                speficially in parent and child context. This is
                                especially useful for creating drop down menus.
                              </p>
                            </li>
                            <li>
                              <p>
                                <a href="">Space & Gap</a>
                              </p>
                              <Code>space-y-2 gap-x-2</Code>
                              <p>
                                These properties can be applied on parent
                                elements to automatically provide the set amount
                                of spacing to all its children, except the first
                                child. Need it on the first child? simply flag
                                the first child like so to also give it space
                              </p>
                              <Code>first:mt-2</Code>
                              <p>
                                This simple yet effective code reduction
                                technique saves likely 100s of lines of CSS
                                across the project. I asked CoPilot to verify
                                this claim, here's the results:
                              </p>
                              <p className="font-bold">
                                &quot;Using Tailwinds utility classes like
                                space-y-2, gap-x-2, and variants like first:mt-2
                                allows you to handle spacing and layout directly
                                in your markup, eliminating the need for custom
                                CSS selectors and repetitive margin/padding
                                rules. In a large project, this can easily save
                                hundreds of lines of hand-written CSS, reduce
                                maintenance overhead, and improve consistency.
                                This is one of the main reasons teams adopt
                                Tailwind CSS.&quot;
                              </p>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <p>
                            <a href="https://tailwindcss.com/docs/theme">
                              Writing Custom CSS is still valid
                            </a>
                          </p>
                          <p>
                            Tailwind naturally comes with it&apos;s own set of
                            biases, however Tailwind should{" "}
                            <span className="font-bold">not be mistaken</span>{" "}
                            for something like Bootstrap. Tailwind is a CSS
                            framework, and is supringingly easy to customize and
                            integrate our own setup into. Not to mention, we can
                            still define our own CSS and even use
                            Tailwind&apos;s helper classes to define it&apos;s
                            properties for common patterns.
                          </p>
                          <Code>{`.custom {\n  @apply unum:bg-unum-blue_2 colonial:bg-colonial_steelblue text-2xl font-bold text-center;\n}`}</Code>
                          <Code>{`.custom {\n  background-color: var(--brand-bg-color); //Resolves to theme(colors.brand.swatch) \n  font-size: theme('fontSize.2xl');\n  font-weight: theme('fontWeight.bold');\n  text-align: center;\n}`}</Code>
                          <p>
                            There are 2 methods of writing custom CSS that falls
                            outside of component scoped implementation and
                            examples of those are above. Generally this
                            won&apos;t always need to be the case, as the
                            utility paradigm solves most cases, but if Tailwind
                            cannot do it, we can. So what&apos;s the difference?{" "}
                            <span className="font-bold">@apply</span> is limited
                            to existing Tailwind utility classes and their
                            variants, so it can’t be used for arbitrary values
                            or custom pseudo-classes. The{" "}
                            <span className="font-bold">theme()</span> function,
                            on the other hand, lets you access any value from
                            your Tailwind config, giving you more flexibility
                            for advanced or custom CSS. Once the configuration
                            is created, no matter how you build your component
                            classes, Tailwind&apos;s theming framework helps
                            maintain concise styling and consistency across the
                            project.
                          </p>
                        </li>
                        <li>
                          <p>
                            <a href="">This is the modern approach</a>
                          </p>
                          <p>
                            This project presents an oppurtunity for all of us
                            to expand our knowledge of current technology and
                            modernize our approach. We have a very unique
                            oppurtunity in this moment today that we very well
                            may not see again for several years - this
                            implementation is a chance to seize a codebase that
                            works for all of us. That&apos;s not to imply that
                            Tailwind has to work for you, but as developers and
                            as individuals, growing our skill set in industry
                            standard frontend frameworks not only make us more
                            more attractive canidates but also shows exactly
                            what this team is capable of when were asked to
                            adopt new technologies and improve our work,
                            timelines and robustness.
                          </p>
                        </li>
                      </ul>
                    </Content>
                  </Highlight>
                </Frame>
                <Frame type="col">
                  <Highlight
                    darkGroup="unum:bg-unum-blue_2 colonial:bg-colonial-coral_4"
                    lightGroup="unum:bg-unum-pool_4 colonial:bg-colonial-leaf_1"
                  >
                    <Content
                      heading="Drawbacks"
                      content="Tailwind CSS is a utility-first CSS framework that allows for rapid styling of components using predefined classes."
                    >
                      <ul>
                        <li>
                          <p className="font-bold">
                            &quot;Reworking&quot; Again
                          </p>
                          <p>
                            We will have to spend some time updating the current
                            code base to support Tailwind. This is definitley a
                            drawback, but I do believe it&apos;s a lot softer
                            than we may imagine. Because Tailwind is a CSS
                            Framework, and not a full on style system like
                            Bootstrap, Tailwind will not break any of the
                            current CSS Modules. That said, there will need to
                            be discussion around the best way to inetgrate
                            Tailwind into our code and holding ourselves to
                            well-thought best practices and to not allow
                            ourselves to be over reliant on the utility first
                            approach.
                          </p>
                        </li>
                        <li>
                          <p></p>
                        </li>
                      </ul>
                    </Content>
                  </Highlight>
                </Frame>
              </Highlight>
            </Content>
          </Frame>
          <Frame type="two-col">
            <Content
              heading="Tailwind CSS Benefits"
              content="Tailwind CSS provides utility-first styling, which allows for rapid development and easy customization. It also promotes consistency across components."
            ></Content>
            <Content
              heading="Tailwind CSS Features"
              content="Tailwind CSS includes features like responsive design, hover states, and dark mode support, making it a versatile choice for modern web development."
            ></Content>
          </Frame>
        </section>
      </main>
    </>
  );
}
