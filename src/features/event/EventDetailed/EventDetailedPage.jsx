import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedChat from './EventDetailedChat'
import EventDetailedSidebar from './EventDetailedSidebar'

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  //이벤트id가 없는 경우 = 아무것도 표시 되지 않는 것을 에러처리 안되게 하려고 빈 이벤트를 만든다
  let event = {};

  //이벤트id와 스토어에있는 이벤트가 존재하면
  if (eventId && state.events.length > 0) {
    //간단하게 필터로 이벤트id와 params 이벤트 id가 맞는지 체크
    event = state.events.filter(event => event.id === eventId)[0]
  }
  return{
    event
  }
}

const EventDetailedPage = ({event}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat/>
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar attendees={event.attendees}/>
      </Grid.Column>
    </Grid>
  )
}

export default connect(mapState)(EventDetailedPage);
