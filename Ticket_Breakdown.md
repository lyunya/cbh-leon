# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket #1 Add ability for facilities to save custom ID for each agent

AC: When adding or editing an agent, there is a customID field for each agent the facility can update.

Time Estimate: ~5 days to build, test, implement

Implementation Details: Add new customID property to the agent object. This will be manually entered by the facility. The field can be updated, and once saved will create a put request to update the customID for that agent in the database. We will need to write tests to ensure an agent cannot be saved with an empty customID property. We should make sure it's saved as a specific data type (ex: string or number). We need to make sure it saves correctly, and can be updated. 



Ticket #2 Add ability to generate report by Agent using their new customID

AC: A facility can generate PDF report showing an agent's shift using their custom ID.

Time Estimate: ~4 days to build, test, implement

Implementation Details: Once the first ticket is complete, agents should now have a customID property. Create a function that searches for an agent based on the input. The input should match the customID property. If there is a match, generate PDF report displaying that agent's shifts. Write tests to make sure no PDF is generated if there's no match, also to check it functions properly if there is a match.