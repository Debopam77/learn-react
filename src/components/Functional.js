import '../style/index.scss';
import {whatIsFunctional, functionalExample} from '../textInformation/functionalText';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula} from 'react-syntax-highlighter/dist/esm/styles/prism';

function Functional() {

    return (
        <div>
            <h1>Functional REACT</h1>

            <div className='infoChunk'>
                <h2 className='infoHeading'>What is Functional REACT</h2>
                <div className='infoArea'>{whatIsFunctional}</div>
            </div>

            <div className='infoChunk'>
                <h2 className='infoHeading'>How does it look ?</h2>
                <SyntaxHighlighter language="jsx" style={dracula} useInlineStyles='true' className='infoArea Syntax'>
                    {functionalExample}
                </SyntaxHighlighter>
            </div>

            <div className='infoChunk'>
                
            </div>
        </div>
    );
}

export default Functional;