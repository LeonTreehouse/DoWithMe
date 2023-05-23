
import { FormControl, Input, Select, Textarea } from '@chakra-ui/react';


  const CreateMeetingForm = () => {
    return (
      
    <FormControl className='createMeetingForm'>
    <Input className="createMeetingTitle" placeholder='Titel...'  width="300px" bgColor="#05976B" color={'white'} _placeholder={{ color: 'white' }}/>
    <Input className="createMeetingPlace" placeholder='Skriv plats...'  width="300px" bgColor="#05976B" color={'white'} _placeholder={{ color: 'white' }}/>
        <Select className="createMeetingDay" placeholder='Välj Dag...'  width="300px"  bg="#05976B" color={'white'} _placeholder={{ color: 'white' }}>
            <option style={{ color: 'black' }}>Måndag</option>
            <option style={{ color: 'black' }}>Tisdag</option>
            <option style={{ color: 'black' }}>Onsdag</option>
            <option style={{ color: 'black' }}>Torsdag</option>
            <option style={{ color: 'black' }}>Fredag</option>
            <option style={{ color: 'black' }}>Lördag</option>
            <option style={{ color: 'black' }}>Söndag</option>
         </Select>
    <Textarea className="createMeetingDescription" placeholder='Beskrivning...'  width="300px" bgColor="#05976B"_placeholder={{ color: 'white' }}/>
    </FormControl>

    );
  };
  export default CreateMeetingForm;
