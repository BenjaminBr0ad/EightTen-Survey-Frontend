import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Icon } from 'react-materialize'

import 'react-vertical-timeline-component/style.min.css';


export default class Timeline extends Component {
  render() {
    const {responses} = this.props
    return (
      <VerticalTimeline className='vertical-timeline'>
        {responses ? responses.map((response, i) => {
            return (
              <VerticalTimelineElement
                key={response.response}
                className="vertical-timeline-element--work "
                icon={<Icon className="result_icon">bubble_chart</Icon>}
                iconStyle={{ background: '#1f73be', color: '#fff' }}
                >
                  <p>
                    {response.response}
                  </p>
                </VerticalTimelineElement>
            )
          })
          :   <VerticalTimelineElement
              key="coming-soon"
              className="vertical-timeline-element--work "
              icon={<Icon className="result_icon">bubble_chart</Icon>}
              iconStyle={{ background: '#1f73be', color: '#fff' }}
              >
                <p>
                  Coming Soon
                </p>
              </VerticalTimelineElement>
        }
        </VerticalTimeline>

    )
  }
}
