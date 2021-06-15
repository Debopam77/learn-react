import '../../style/Home.scss';
import {whatIsReact, whyUseReact, whatDoesReactSolve, featuresOfReact} from './homeText';

function Home() {

    return (
        <div>
            <h1>Welcome to Learn React</h1>
            <div className='infoChunk'>
                <h2 className='infoHeading'>What is React anyway?</h2>
                <div className='infoArea'><p className='info'>{whatIsReact}</p></div>
            </div>

            <div className='infoChunk'>
                <h2 className='infoHeading'>Why us React</h2>
                <div className='infoArea'><p className='info'>{whyUseReact}</p></div>
            </div>

            <div className='infoChunk'>
                <h2 className='infoHeading'>What does it solve</h2>
                <div className='infoArea'><p className='info'>{whatDoesReactSolve}</p></div>
            </div>

            <div className='infoChunk'>
                <h2 className='infoHeading'>Features :</h2>
                <div className='infoArea'>
                    <ul>
                        {featuresOfReact.map((item, index)=>{
                            return <li key={`${index}_info`} className='info'>{item}</li>;
                        })}
                    </ul>
                </div>
                
            </div>
            
        </div>
    );
}

export default Home;