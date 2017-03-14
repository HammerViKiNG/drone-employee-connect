import React, { PropTypes } from 'react';

const Main = props => (
  <div className="row">
    <div className="col-md-12">
      <div className="panel panel-default">
        <div className="panel-body">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th style={{ width: '20%' }}><code>arch</code></th>
                <td>{props.arch}</td>
              </tr>
              <tr>
                <th><code>internet</code></th>
                <td>{(props.internet) ? 'true' : 'false'}</td>
              </tr>
              <tr>
                <th><code>processor</code></th>
                <td>{props.processor}</td>
              </tr>
              <tr>
                <th><code>system</code></th>
                <td>{props.system}</td>
              </tr>
              <tr>
                <th><code>time</code></th>
                <td>{props.time}</td>
              </tr>
              <tr>
                <th><code>mem</code></th>
                <td>{props.usage.mem}</td>
              </tr>
              <tr>
                <th><code>cpu</code></th>
                <td>
                  <ul>
                    {props.usage.cpu.map((item, index) =>
                      <li key={index}>
                        {item}
                      </li>
                    )}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

Main.propTypes = {
  arch: PropTypes.string,
  internet: PropTypes.bool,
  processor: PropTypes.string,
  system: PropTypes.string,
  time: PropTypes.number,
  usage: PropTypes.shape({
    cpu: PropTypes.array,
    mem: PropTypes.number
  })
};

Main.defaultProps = {
  arch: '',
  internet: false,
  processor: '',
  system: '',
  time: 0,
  usage: {
    cpu: [],
    mem: 0
  }
};

export default Main;