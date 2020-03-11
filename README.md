# Fetch Trades

This project is a create-react-app project that will fetch trades from an http endpoint and display the trades into a trades table and then an aggragate trades table.

## Tools (reasons in parens)
I chose create-react-app because of my familiarity with React and the React related tools and skeleton app that create-react-app creates. The requirements for this project do not necessarily require React, it can be done with a plain html and Javascript but I chose to use a front-end framework because of ease of use.

## Setup

```
// to install the project
npm i
```

```
// to start a local server
npm run start
```

## Steps I took in development

Kanban board is here: https://trello.com/b/fHnu7pBH/fetchtrades

The steps I took are listed in order from first to last in the done column and the backlog and in progress column is listed in order of high priority to low priority.

## General development stratagy

The objective of this app is to fetch data from an api and turn that data into two tables. My initial deisgn was to fetch the trades data when the react app renders, and then I pass the fetched data down into two child components. The Trades table requires little manipulation of the fetched data. The Aggregate Table or the Aggregate Trades Table requires more manipulation of the fetched data but since it's sumations, I beleive that logic can be handled as part of the component without breaking out that logic into a seperate file.

Writing the function that turns a list of trades into an aggregate trade was tricky. In situations like those, I find TDD one of the best ways to solve a logic puzzle and Jest is a great testing framework for writing unit tests. If you would like to see my step by step process, I would suggest looking at the branch, 'create-aggregate-table'.