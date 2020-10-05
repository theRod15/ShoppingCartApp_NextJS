import React from 'react'
import styled from 'styled-components'
import { Container } from './Container'

const StyledFooter = styled.footer`
  padding: 4rem 0;

  background: rgb(232 246 236);
  color: rgb(82 81 81);
  line-height: 1.6;
  text-align: justify;
  .footer-wrapper > * {
    display: block;
    margin-bottom: 2rem;
  }
  @media (min-width: 768px) {
    .footer-wrapper {
      display: flex;
      justify-content: space-between;
    }
    .footer-wrapper > * {
      margin: 0 3rem;
    }
  }
`
const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <div className="footer-wrapper">
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
            nostrum? Nam dolor voluptatem numquam obcaecati mollitia praesentium
            quae consequatur voluptate, explicabo incidunt ipsa molestias
            exercitationem recusandae sint quisquam odio nisi!
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi nulla
            neque repudiandae cumque, inventore consequuntur in nihil
            reiciendis, autem molestias, ut odit. Eveniet blanditiis quae et rem
            culpa aliquam. Eius!
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            animi facere tempora deserunt neque distinctio accusamus, sed, cum a
            est nesciunt laborum nostrum! Accusamus nesciunt accusantium ut
            aspernatur, incidunt beatae.
          </div>
        </div>
      </Container>
    </StyledFooter>
  )
}
export default Footer
