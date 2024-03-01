# Homework Ubiquiti

Hello,this is homework from Karolina Uskure.
Few notes on my project:
-It was generated using Vite and for my component styling Ive picked Mantine.
-DevicePage can be accesed by clicking on the device name in the table or grid.
-All functionality from design was implemented, but theres a lack in testing as I dont have enough experience(but very
keen on learning(!) and joining the team,where testing is not outsourced to another team).My start testing choice was
Vitest(due
to my project being generated with Vite) and Jest, but current test are not working due some configuration issue I
havent detected yet.
-I visualized 6 icons on grid view instead of 5(how it is on design),due to page visually having gaps that looked to big
between elements on my screen.
-On DevicePage last three values(Max.Power,Speed and Number of ports) are empty due to no obvious alignment with data
coming from the backend.Would need to contact backend member to align what would be the correct keys for values I need.


Big ticket items for future:

- Consider using react router loaders for fetching data
- Or consider swr/react-query/tanstack query for fetching data
- Or consider external global state like mobx/redux
- Error handling
- Filter with debounce
- Virtualize device list
- Create test coverage.Start implementation with Vitest and Jest.

