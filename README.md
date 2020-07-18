# BuffBot

!BUFFHELP

!ADD $Buff $Layer $Time $Cost

//TO-DO

Store data file

Clear at time of buff drop

Announce at time of buff drop

"Listening to: !BUFFHELP" Status

Link Variables

Variables that need to be linked & accepted by users (in this order) + (data validation):

$buff

$layer

$time

$Cost

//Saved refrence

#H-buff-planning-and-questions - BUFF COORDINATION IN THIS CHANNEL. POST TIMES IN #H-buff-drop-time

#H-buff-drop-time - POST THE TIMES WHEN THINGS ARE GOING TO BE DROPPED OR HAVE BEEN DROPPED

#A-buff-planning-and-questions - BUFF COORDINATION IN THIS CHANNEL. POST TIMES IN #A-buff-drop-time

#A-buff-drop-time - POST THE TIMES WHEN THINGS ARE GOING TO BE DROPPED OR HAVE BEEN DROPPED

- Mods/designated buff watchers with @buffmonitor role get access to #buff-drop-time send message only. everyone else must post/coordinate in #X-buff-planning-and-questions

- Mods/designated buff watchers can do 

    !buff username onyxia layer time 
    
    !buff username nefarian layer time
    
    !buff username wcb layer time
    
    !buff username zg layer time


- Opt-in buttons in #read-me-first

    :onyxia: - DM's you if a new onyxia buff was added to the list
    
    :nefarian: - DM's you if a new nefarian buff was added to the list
    
    :wcb: - DM's you if a new wcb buff was added to the list
    
    :zg: - DM's you if a new zg buff was added to the list
    

- Bot accepts alert time-frame logic for suppression ONLY enabled through DM

    !buff timers 1234567 16:00-20:00  (all 7 days of the week, remove a number based on days you want/dont want)
    
    !buff timers off - disables timeframe logic and allows all alerts via DM again based on opt-ins

//Notes

Get Emojis: \:emoji:
