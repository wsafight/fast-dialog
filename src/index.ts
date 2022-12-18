import {
  FASTElement,
  customElement,
  attr,
  html,
  css
} from '@microsoft/fast-element';

const template = html<NameTag>` 
  <div class="header"> 
    <h3>${x => x.greeting.toUpperCase()}</h3> 
    <h4>my name is</h4> 
  </div> 
  <div class="body">TODO: Name Here</div> 
  <div class="footer"></div> 
`;
const styles = css` 
:host { 
  display: inline-block; 
  contain: content; 
  color: white; 
  background: var(--background-color); 
  border-radius: var(--border-radius); 
  min-width: 325px; 
  text-align: center; 
  box-shadow: 0 0 calc(var(--depth) * 1px) rgba(0,0,0,.5); 
} 
:host([hidden]) { 
  display: none; 
} 
`

@customElement({
  name: 'name-tag',
  template,
  styles
})
export class NameTag extends FASTElement {
  @attr greeting: string = 'Hello';
} 