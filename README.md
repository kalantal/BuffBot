# BuffBot
## Herod's Discord Buff Management

### Commands
```
#Help
!buffhelp

#See Upcoming Buffs
!alliance-all, !horde-all
!zg
!ony-a, !ony-h
!sf-a, !sf-h
!nef-a, !nef-h
!wcb, !wcb-a
!summon-a, !summon-h
!dmf-summon-a, !dmf-summon-h
!port-a, !port-h
!layer-a, !layer-h
 
#Add Upcoming Buffs:
!add $Buff $Layer $Time $Cost (if any)
```

### TO-DO

```
Store data file
Clear at time of buff drop
Announce at time of buff drop
Link Variables
Variables that need to be linked & accepted by users (in this order) + (data validation):
$buff
$layer
$time
$cost
```

### Saved refrence

```
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
```

### Notes

```
Get Emojis: \:emoji:
```
