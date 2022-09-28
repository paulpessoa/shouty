Feature: Hear shout
    Scenario: Listener is within range
        Given Lucy is located 15 meterss from Sean
        When Sean shouts "free bagels at Seans"
        Then Lucy hears Sean's message