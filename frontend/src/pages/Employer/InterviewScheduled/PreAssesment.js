import React from "react";
import { Button } from "react-bootstrap";
import PreAssesmentStyle from "./InterviewScheduled.module.css";

const PreAssesment = () => {
  return (
    <>
      <div className={PreAssesmentStyle.pre_asssesment_container}>
        <div className={PreAssesmentStyle.coding_round_container}>
          <div className={PreAssesmentStyle.rounds_heading}>Coding Round</div>

          <div className={PreAssesmentStyle.question_container}>
            <div className={PreAssesmentStyle.question_number}>
              Question no .1
            </div>
            <div className={PreAssesmentStyle.question}>
              Lorem ipsum dolor sit amet. In assumenda recusandae ea voluptates
              odio et sint aliquid et repellat modi qui maiores enim. Ex
              consequatur quia sed consectetur dolores ea omnis itaque At quos
              nulla ea sint excepturi eos error unde non iste ullam. Ad
              voluptatum incidunt aut deleniti suscipit 33 quod explicabo rem
              quia sunt. Lorem ipsum dolor sit amet. In assumenda recusandae ea
              voluptates odio et sint aliquid et repellat modi qui maiores enim.
              Ex consequatur quia sed consectetur dolores ea omnis itaque At
              quos nulla ea sint excepturi eos error unde non iste ullam. Ad
              voluptatum incidunt aut deleniti suscipit 33 quod explicabo rem
              quia sunt.
            </div>
          </div>

          <div className={PreAssesmentStyle.add_btn_container}>
            <Button className={PreAssesmentStyle.add_btn}>ADD +</Button>
          </div>
        </div>

        <div className={PreAssesmentStyle.aptitude_round_container}>
          <div className={PreAssesmentStyle.rounds_heading}>Aptitude Round</div>

          <div className={PreAssesmentStyle.aptitude_round_flex_container}>
            <div>
              <div>
                <div
                  className={
                    PreAssesmentStyle.aptitude_round_question_option_heading
                  }
                >
                  Question
                </div>
                <div
                  className={
                    PreAssesmentStyle.aptitude_round_question_container_first_question
                  }
                >
                  <div
                    className={PreAssesmentStyle.aptitude_round_question_number}
                  >
                    Question no. 1
                  </div>
                  <div className={PreAssesmentStyle.aptitude_round_question}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                </div>

                <div
                  className={
                    PreAssesmentStyle.aptitude_round_question_container
                  }
                >
                  <div
                    className={PreAssesmentStyle.aptitude_round_question_number}
                  >
                    Question no. 2
                  </div>
                  <div className={PreAssesmentStyle.aptitude_round_question}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className={
                  PreAssesmentStyle.aptitude_round_question_option_heading
                }
              >
                Option
              </div>
              <div
                className={
                  PreAssesmentStyle.aptitude_round_option_container_first_option
                }
              >
                <ol type="A">
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                  <li>Option 4</li>
                </ol>
              </div>

              <div
                className={PreAssesmentStyle.aptitude_round_option_container}
              >
                <ol type="A">
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                  <li>Option 4</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className={PreAssesmentStyle.add_btn_container}>
          <Button className={PreAssesmentStyle.add_btn}>ADD +</Button>
        </div>

        <div className={PreAssesmentStyle.form_action_btn_container}>
          <div className={PreAssesmentStyle.cancel_btn_container}>
            <Button className={PreAssesmentStyle.cancel_btn}>CANCEL</Button>
          </div>

          <div className={PreAssesmentStyle.submit_btn_container}>
            <Button className={PreAssesmentStyle.submit_btn}>SUBMIT</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreAssesment;
