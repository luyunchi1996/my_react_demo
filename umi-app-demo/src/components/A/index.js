import React, { PureComponent, Fragment } from 'react';

import Question from './question';

class A extends PureComponent {

  questions=[]

  render() {
    const { data, value } = this.props;
    return (
      <Fragment>
        <div>
          {data &&
            data.map(o => (
              <div>
                <p>{o.title}</p>
                <ul>
                  {o.questions.map(oq => (
                    <li>
                      <Question questions={this.questions} {...oq} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          <div>

          </div>
        </div>
      </Fragment>
    );
  }
}

export default A;
