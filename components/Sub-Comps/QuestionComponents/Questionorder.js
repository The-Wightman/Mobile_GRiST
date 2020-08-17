import React, { Component, useState } from "react";

export default workingage_xml_structure = (	
	`	
<node label="mental health" code="mental-health-risk" min-mg-exceptions="(hto-sex-asslt gen-dep-stage)" populations="working-age" services="((structure ((iapt ((future-changes needed)))(service-user ((future-changes needed)))))(rendition ((service-user ((su-pop-alt-report-scale-col true)(su-pop-alt-report-scale-labels true))))))" overall-formulation="((title &quot;Risk formulation&quot;) (headings ((problem-risks &quot;Risks being formulated (Problem risks)&quot; &quot;Problem&quot; &quot;What are the main risks being addressed?&quot;) (precipitating-factors &quot;Risk triggers (Precipitating factors)&quot; &quot;Precipitating&quot; &quot;What factors have suddenly caused the risks to change?&quot;) (perpetuating-factors &quot;Persistent contextual factors (Perpetuating)&quot; &quot;Perpetuating&quot; &quot;What are the continuous risk influences?&quot;) (past-factors &quot;Past factors (Historical, Pre-existing or Predisposing)&quot; &quot;Pre-existing&quot; &quot;What historic factors influence the risks?&quot;) (protective-factors &quot;Protective factors&quot; &quot;Protective&quot; &quot;What factors are lowering the risks?&quot;)(risk-escalators &quot;Risk escalators (changes that would dangerously increase risks)&quot; &quot;Escalators&quot; &quot;What factors would immediately raise risks if they were to change?&quot;))))" overall-management="((title &quot;Safety Plan&quot;))">
	<node label="suicide" code="suic" _FIXME="TODO - replace mg-deviation-threshold attrib with a real version" value-mg="((0 0) (10 1))">
		<node label="suicide specific questions" code="sui-specific" layer="0" screening="0" screening-only="true">
			<node label="past and current suicide attempts" code="suic-past-att" layer="0" filter-q="" screening="0">
				<node label="occurrence of suicide attempts" code="suic-occur">
					<node label="most recent suicide attempt" code="suic-most-rec" value-mg="((0 1)(2 1)(26 0.5))" layer="0" screening="0"/>
					<node label="more than one suicide attempt" code="suic-patt-att" layer="0" filter-q="" screening="0">
						<node label="changing frequency of suicide attempts" code="suic-escalate" value-mg="((DECREASING 0) (SAME 0.5) (INCREASING 1))" layer="0" screening="0"/>
						<node label="first time suicide attempt occurred" code="suic-first-occ" value-mg="((0 0.4) (52 0.4))"/></node>
					<node label="how many suicide attempts" code="suic-how-many" value-mg="((0 0)(1 0.5)(3 1))"/></node>
				<node label="preparation and seriousness of suicide attempts" code="suic-prep-serious-at">
					<node label="suicide note written for one or more previous attempts" code="suic-note-prev" value-mg="((YES 1) (NO 0))"/>
					<node label="seriousness of suicide methods" code="suic-ser-method">
						<node label="potential lethality of suicide method" code="suic-lethality" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
						<node label="chance of discovery after suicide attempts" code="suic-discovery" value-mg="((0 0) (10 1))"/></node>
				</node>
				<node label="person's current perspective on suicide attempts" code="suic-person-per">
					<node label="thoughts/feelings related to previous suicide attempts" code="suic-thght-prev">
						<node label="How much did the person want to succeed with the suicide attempts" code="suic-ser-succd" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
						<node label="regret about trying to complete suicide" code="suic-regret" value-mg="((0 0) (10 1))" layer="0" screening="0"/></node>
					<node label="insight into lethality of previous suicide attempts" code="suic-leth-insght" value-mg="((0 0) (10 1))"/></node>
			</node>
			<node label="current suicidal situation and behaviour" code="suic-curr-sit-behav">
				<node label="current intention to complete suicide" code="suic-curr-int" layer="0" screening="0">
					<node label="self-harm behaviour indicative of suicide" code="suic-s-h-behv" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
					<node label="plans and methods for completing suicide" code="suic-plans" filter-q="">
						<node label="realism of suicide plan" code="suic-plan-real" value-mg="((0 0) (10 1))"/>
						<node label="physical steps taken to implement suicide plan" code="suic-steps-takn" value-mg="((0 0) (10 1))"/>
						<node label="potential lethality of prospective suicide method" code="suic-prosp-leth" value-mg="((0 0) (10 1))"/></node>
					<node label="informed someone about intention to complete suicide" code="suic-int-inform" value-mg="((YES 1) (NO 0))"/>
					<node label="end-of-life preparations for intended suicide act" code="suic-eol-prep" value-mg="((0 0) (10 1))"/>
					<node label="spiritual/religious values/beliefs affecting suicide risk" code="suic-rel-belief" value-mg="((STRONGLY-PROTECT 0) (PROTECT 0) (NO-EFFECT 0) (INCREASE 0.5) (STRONGLY-INCREASE 1))"/></node>
				<node label="potential triggers for prospective suicide" code="suic-int-p-trig" layer="0" screening="0">
					<node label="potential triggers of suicide" code="suic-pot-trig" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
					<node label="potential triggers match those that previously caused suicide attempts" code="suic-p-trig-mtch" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
					<node label="family history of suicide" code="suic-fam-hist" value-mg="((YES 1) (NO 0))"/></node>
				<node label="suicidal ideation" code="suic-ideation" layer="0" filter-q="" screening="0">
					<node label="ability to control suicidal ideation" code="suic-id-control" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
					<node label="content of suicidal ideation indicates high risk" code="suic-id-hi-risk" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
					<node label="strength, intensity, intrusiveness, and persistence of suicidal ideation" code="suic-id-strngth" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
					<node label="frequency of suicidal ideation" code="suic-id-freq" value-mg="((DAILY 1) (WEEKLY 0.5) (MONTHLY 0.2) (LESS-THAN-MONTHLY 0))"/></node>
				<node label="appearance indicators of suicide" code="app-suic">
					<node label="appearance indicators of self neglect" code="sn-appearnce" layer="0" filter-q="" screening="0" generic="g">
						<node label="hair and clothing indicative of self neglect" code="sn-hair-clothes" value-mg="((0 0) (10 1))"/>
						<node label="personal hygiene" code="sn-hygiene" value-mg="((0 0) (10 1))" generic-type="g"/>
						<node label="recent change in appearance of self neglect" code="sn-recnt-app-chnge" value-mg="((0 0) (10 1))"/>
						<node label="skin" code="sn-skin" value-mg="((0 0) (10 1))"/></node>
					<node label="self-harming injuries" code="gen-sh-cuts" value-mg="((0 0) (10 1))" generic="g"/></node>
			</node>
		</node>
		<node label="state of mind" code="gen-state-mind" generic-type="gd">
			<node label="feelings/emotions" code="gen-feel-emot" layer="0" screening="0" generic-type="gd">
				<node label="mood swings/lability" code="gen-mood-swings" value-mg="((0 0) (10 1))"/>
				<node label="negative feelings about the self" code="gen-negative-self" value-mg="((0 0) (10 1))" pathways="(wellbeing ptsd)"/>
				<node label="hopelessness" code="gen-hopeless" header="Questions on hopelessness" generic-type="g">
					<node label="life not worth living" code="gen-life-not-livng" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
					<node label="plans for the future" code="gen-plans-future" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/></node>
				<node label="angry emotions" code="gen-angry-emotns" value-mg="((0 0) (10 1))" pathways="(ptsd)" screening="0"/>
				<node label="anxiety-based emotions" code="gen-anx-emotns" value-mg="((0 0) (10 1))" pathways="(wellbeing ptsd)"/>
				<node label="helplessness" code="gen-helpless" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
				<node label="sad/downbeat" code="gen-sad" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
				<node label="distress" code="gen-distress" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
				<node label="jealousy" code="gen-jealous" value-mg="((0 0) (10 1))"/></node>
			<node label="person's perspective of self worth" code="gen-self-worth-p" layer="0" screening="0" generic-type="gd">
				<node label="worthlessness" code="worthlessness" value-mg="((0 0) (10 1))" layer="0" pathways="(wellbeing)" screening="0"/>
				<node label="grandiosity" code="grandiosity" value-mg="((0 0) (10 1))"/></node>
		</node>
		<node label="personality and way of thinking" code="gen-person-thinking" generic-type="gd">
			<node label="personality issues" code="gen-personality" layer="0" screening="0" generic-type="gd">
				<node label="impulsiveness" code="gen-impulse" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
				<node label="assertiveness" code="gen-assertive" value-mg="((NOT-ASSERTIVE 1) (SOMEWHAT-ASSERTIVE 0.3) (NORMALLY-ASSERTIVE 0) (VERY-ASSERTIVE 0) (EXTREMELY-ASSERTIVE 0))" generic-type="gd" generic-datum="gd"/>
				<node label="ability to empathise" code="gen-empathy-abil" value-mg="((0 0) (10 1))"/>
				<node label="dependence" code="gen-dependence" value-mg="((0 0) (10 1))"/>
				<node label="controlling/organisational approach" code="gen-controlling" value-mg="((chaotic 0.5) (disorganised 0.2) (normal 0) (very-organised 0.5)(obsessional-perfectionist 1))" generic-type="gd" generic-datum="gd"/>
				<node label="capacity to cope with major life stresses" code="gen-coping-abil" value-mg="((0 0) (10 1))"/>
				<node label="hostility" code="gen-hostile" value-mg="((0 0) (10 1))" pathways="(ptsd)" screening="0"/>
				<node label="reliability" code="gen-reliable" value-mg="((0 0) (10 1))"/>
				<node label="personality disorder" code="gen-pers-dis" value-mg="((YES 1) (NO 0))"/></node>
			<node label="problems with mental faculties/cognitive capacity" code="ment-fac" layer="0" filter-q="" pathways="(ptsd)" generic-type="g">
				<node label="impaired cognitive function" code="gen-impaird-cog" value-mg="((none 0)(mild 0.3)(moderate 0.6)(severe 1))"/>
				<node label="changes in thinking processes and memory" code="gen-cog-think-mem" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
				<node label="concentration" code="gen-concentr" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
				<node label="learning disabilities" code="gen-learn-disab" value-mg="((none 0)(mild 0.3)(moderate 0.6)(severe 0.8) (profound 1))"/></node>
			<node label="insight and responsibility" code="insight-resp" layer="0" generic-type="g">
				<node label="insight into behaviour and consequences" code="gen-insght-behvr" value-mg="((0 0) (10 1))"/>
				<node label="responsibility for impact of behaviour on others" code="gen-resp-impct-oth" value-mg="((0 0) (10 1))"/>
				<node label="need for help with difficulties" code="gen-nd-hlp-diff" value-mg="((0 0) (10 1))"/></node>
		</node>
		<node label="health and care" code="gen-health-care" generic-type="gd">
			<node label="history of mental health problems" code="mental-health" layer="0" filter-q="" screening="0">
				<node label="clinical diagnosis of depression" code="clin-depression" layer="0" filter-q="" screening="0">
					<node label="stage of depression" code="gen-dep-stage" value-mg="((FIRST-DIAGNOSIS 1) (RECOVERY-SINGLE-EPISODE 0) (RECOVERY-REPEAT-EPISODES 0.4) (RELAPSE 1))" layer="0" screening="0"/></node>
				<node label="current symptoms of mental illness" code="gen-mntl-cur-sympt" layer="0" filter-q="" screening="0">
					<node label="voice hallucinations" code="gen-voice-hal" layer="0" filter-q="" screening="0" generic-type="g">
						<node label="likelihood of acting on the voices" code="gen-prob-act-voice" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
						<node label="type of voices" code="gen-voices-type">
							<node label="danger of voices to self" code="gen-voice-dang-s" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
							<node label="danger of voices to others" code="gen-voice-dang-o" value-mg="((0 0) (10 1))" layer="0" screening="0"/></node>
					</node>
					<node label="paranoid delusions" code="gen-paranoid-del" layer="0" filter-q="" screening="0" generic-type="g">
						<node label="likelihood of acting on delusions" code="gen-prob-act-par-del" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
						<node label="type of paranoid delusions" code="gen-type-paranoid-del">
							<node label="thoughts about particular individuals" code="gen-paran-del-spec" value-mg="((0 0) (10 1))"/>
							<node label="being harmed, killed, or persecuted" code="gen-paran-del-pers" value-mg="((0 0) (10 1))"/></node>
					</node>
					<node label="mania/hypomania" code="gen-mania" value-mg="((0 0) (10 1))"/></node>
			</node>
			<node label="physical health problems" code="gen-phys-hlth-prb" layer="0" generic-type="gd">
				<node label="chronic disease" code="gen-chronic-disease" filter-q="" multiple-tick="" generic-type="gd">
					<node label="tinnitus" code="tinnitus" value-mg="((yes 1) (no 0))"/>
					<node label="diabetes" code="diabetes" value-mg="((yes 1) (no 0))"/>
					<node label="multiple sclerosis" code="multiple-sclerosis" value-mg="((yes 1) (no 0))"/>
					<node label="asthma" code="asthma" value-mg="((yes 1) (no 0))"/>
					<node label="heart disease" code="heart-disease" value-mg="((yes 1) (no 0))"/>
					<node label="kidney disease" code="kidney-disease" value-mg="((yes 1) (no 0))"/>
					<node label="lung disease" code="lung-disease" value-mg="((yes 1) (no 0))"/>
					<node label="arthritis" code="arthritis" value-mg="((yes 1) (no 0))"/>
					<node label="high blood pressure" code="high-blood-pressure" value-mg="((yes 1) (no 0))"/>
					<node label="any other condition" code="other" value-mg="((yes 1) (no 0))"/></node>
				<node label="when life-threatening or degenerative illness first diagnosed" code="gen-phys-hlth-deg-diag" value-mg="((3 1) (36 0))"/>
				<node label="pain" code="gen-phys-hlth-pain" value-mg="((0 0) (10 1))"/>
				<node label="mobility and dexterity" code="gen-phys-hlth-disa" value-mg="((0 0) (10 1))"/>
				<node label="communication impairment" code="gen-com-imp" value-mg="((0 0) (10 1))"/>
				<node label="deterioration in physical health" code="gen-phys-hlth-det" value-mg="((0 0) (10 1))"/></node>
			<node label="concordance with health services/medication/therapies" code="gen-meds-therpy" layer="0" generic-type="g">
				<node label="concordance" code="gen-meds-concord" value-mg="((0 0) (10 1))"/>
				<node label="person's perception of the supportiveness of service received" code="gen-serv-perc-supp" value-mg="((0 0) (10 1))"/>
				<node label="perceived benefit of medication/therapies" code="gen-med-perc-benft" value-mg="((0 0) (10 1))"/></node>
		</node>
		<node label="involvement with life and others" code="gen-involve-social" generic-type="gd">
			<node label="motivation and engagement with world" code="motive-eng" layer="0">
				<node label="engagement with world" code="gen-eng-world" generic-type="gd">
					<node label="physical withdrawal from world" code="gen-phys-withd" value-mg="((0 0) (10 1))"/>
					<node label="mental withdrawal" code="gen-mental-withd" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/></node>
				<node label="general motivation in life" code="gen-motivation" value-mg="((0 0) (10 1))" pathways="(wellbeing ptsd)"/>
				<node label="lack of energy, drive, or enthusiasm" code="gen-listless" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/></node>
			<node label="social context" code="gen-soc-contxt" layer="0" pathways="(ptsd)" generic-type="gd">
				<node label="relationships" code="gen-relatnshps" layer="0" generic-type="gd">
					<node label="external network of relationships" code="gen-net-relat" value-mg="((0 0) (10 1))" pathways="(wellbeing ptsd)"/>
					<node label="nature of relationships" code="gen-relat-nature">
						<node label="any supportive relationships" code="gen-relat-supp" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
						<node label="detrimental relationships" code="gen-relat-detr" value-mg="((0 0) (10 1))"/></node>
					<node label="detrimental changes to relationships" code="gen-relat-detr-chg" value-mg="((0 0) (10 1))"/></node>
				<node label="living arrangements" code="gen-living-arr" layer="0" generic-type="gd">
					<node label="frequency of moving accommodation" code="gen-move-freq" value-mg="((LESS-THAN-EVERY-YEAR 0) (ONCE-EVERY-YEAR 0.5) (SEVERAL-TIMES-YEAR 0.8) (ONCE-A-MONTH-OR-MORE 1))"/>
					<node label="losing accommodation" code="gen-accom-loss" value-mg="((yes 1)(no 0))"/>
					<node label="support at home" code="gen-home-type" value-mg="((HOMELESS 1) (HOSTEL 0.8) (TWENTY-FOUR-HOUR-CARE-OR-SUPERVISION 0) (daily-support 0.1)(limited-support 0.2)(no-support 0.5))"/>
					<node label="neighbourhood" code="gen-neighbrhd">
						<node label="isolated accommodation" code="gen-isol-accom" value-mg="((0 0) (10 1))"/>
						<node label="risky neighbourhood" code="gen-neigbrhd-rsky" value-mg="((0 0) (10 1))"/></node>
					<node label="state of accommodation" code="gen-accom-state">
						<node label="care of home" code="gen-accom-hm-care" value-mg="((0 0) (10 1))"/>
						<node label="habitable accommodation" code="gen-accom-habitbl" value-mg="((0 0) (10 1))"/></node>
				</node>
				<node label="financial and employment concerns" code="gen-finance-empl" layer="0" generic-type="gd">
					<node label="financial problems" code="gen-finance-prob" header="Questions on financial problems">
						<node label="anxiety about perceived level of debts" code="gen-perc-debt-anx" value-mg="((0 0) (10 1))"/>
						<node label="chronic poverty" code="gen-poverty" value-mg="((0 0) (10 1))"/></node>
					<node label="employment" code="gen-employment" header="Questions on employment">
						<node label="frequency of changing jobs" code="gen-job-chg-frq" value-mg="((0 0) (10 1))"/>
						<node label="recent or potential detrimental change to employment" code="gen-rec-bad-job-ch" value-mg="((0 0) (10 1))"/></node>
				</node>
			</node>
			<node label="general current behaviour" code="gen-currnt-bhvr" layer="0" pathways="(ptsd)" generic-type="gd">
				<node label="reckless risk taking" code="gen-rsk-behavr" value-mg="((0 0) (10 1))" pathways="(ptsd)"/>
				<node label="unintentional risk making" code="gen-unint-risk-behavr" value-mg="((0 0) (10 1))"/>
				<node label="sleep disturbance" code="gen-sleep-dist" value-mg="((0 0) (10 1))" pathways="(ptsd)"/>
				<node label="uncharacteristic recent change in behaviour" code="gen-unusl-rec-bhvr" value-mg="((0 0) (10 1))"/>
				<node label="challenging behaviour" code="gen-chall-bhvr" value-mg="((0 0) (10 1))"/>
				<node label="daily activity" code="gen-day-actvty">
					<node label="structure of day" code="gen-day-struct" value-mg="((0 0) (10 1))"/>
					<node label="general level of activity during the day" code="gen-day-actvty-lev" value-mg="((INACTIVE 0.3) (UNDERACTIVE 0.1) (NORMAL 0) (OVERACTIVE 0.5) (HYPERACTIVE 1))" generic-type="gd" generic-datum="gd"/></node>
				<node label="appropriateness of diet" code="gen-app-diet" header="Questions about diet" generic-type="g">
					<node label="eating healthily" code="gen-diet-eating" value-mg="((0 0) (10 1))"/>
					<node label="weight" code="gen-diet-weight">
						<node label="person's weight" code="gen-diet-weigt-ext" value-mg="((EXTREME-UNDERWEIGHT 1) (UNDERWEIGHT 0.5) (WEIGHT-OK 0) (OVERWEIGHT 0.5) (EXTREME-OVERWEIGHT 1))"/>
						<node label="extreme weight change" code="gen-diet-weigt-chg" value-mg="((0 0) (10 1))"/></node>
					<node label="drinking" code="gen-diet-drink" value-mg="((0 0) (10 1))"/></node>
			</node>
			<node label="substance misuse" code="gen-subs-misuse" layer="0" filter-q="" screening="0" generic-type="gd">
				<node label="detrimental effects of alcohol misuse" code="gen-alc-misuse" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
				<node label="detrimental effects of drugs misuse" code="gen-drug-misuse" value-mg="((0 0) (10 1))" layer="0" screening="0"/></node>
		</node>
		<node label="adverse life events" code="adv-life-event" filter-q="" pathways="(ptsd)" generic-type="gd">
			<node label="abuse to person" code="gen-life-abuse" filter-q="" pathways="(ptsd)" generic-type="g">
				<node label="sexual abuse" code="gen-life-sex-abuse" filter-q="" pathways="(ptsd)">
					<node label="most recent episode of sexual abuse" code="gen-sex-abse-last" value-mg="((0 1) (5 0.5))"/>
					<node label="sexual abuse during childhood (0 to 16)" code="gen-sex-abse-as-ch" value-mg="((YES 1) (NO 0))" pathways="(ptsd)"/></node>
				<node label="physical abuse" code="gen-phys-abse" filter-q="" pathways="(ptsd)">
					<node label="most recent episode of physical abuse" code="gen-phys-abse-last" value-mg="((0 1) (24 0.5))"/>
					<node label="physical abuse during childhood (0 to 16)" code="gen-phy-abse-as-ch" value-mg="((YES 1) (NO 0))" pathways="(ptsd)"/></node>
				<node label="emotional abuse" code="gen-emot-abse" filter-q="" pathways="(ptsd)">
					<node label="most recent episode of emotional abuse" code="gen-emot-abse-last" value-mg="((0 1) (24 0.5))"/>
					<node label="emotional abuse during childhood (0 to 16)" code="gen-emo-abse-as-ch" value-mg="((YES 1) (NO 0))"/></node>
				<node label="financial abuse" code="gen-financial-abuse" value-mg="((YES 1) (NO 0))"/></node>
			<node label="other challenging experiences" code="other-chall-exp" header="Other challenging experiences">
				<node label="forensic/criminal proceedings" code="gen-forensic-proc" filter-q="">
					<node label="current/criminal proceedings" code="gen-forensic-proc-curr" value-mg="((YES 1) (NO 0))"/></node>
				<node label="environment person grew up in" code="gen-env-grew-up" value-mg="((0 0) (10 1))" pathways="(ptsd)"/>
				<node label="eating disorders" code="gen-eating-dis" value-mg="((0 0) (10 1))"/>
				<node label="educational experience" code="gen-educ-expr" value-mg="((0 0) (10 1))" pathways="(ptsd)"/>
				<node label="serious injury" code="serious-injury" value-mg="((0 0) (10 1))" pathways="(ptsd)"/></node>
		</node>
		<node label="person's behavioural presentation during assessment" code="gen-presentation" filter-q="" screening="0" generic-type="gd">
			<node label="person's engagement with assessor" code="gen-engagement" filter-q="" generic-type="gd">
				<node label="rapport" code="gen-rapport" value-mg="((0 0) (10 1))"/>
				<node label="person's responsiveness" code="gen-responsve" value-mg="((0 0) (10 1))"/>
				<node label="assessor's uneasiness about the person" code="gen-gut-assmnt" value-mg="((0 0) (10 1))"/></node>
			<node label="verbal indicators of risk" code="gen-risk-verbal" filter-q="" generic-type="gd">
				<node label="tone" code="gen-risk-tone">
					<node label="degree of aggression/hostility" code="gen-risk-aggrsv" value-mg="((0 0) (10 1))"/>
					<node label="how upbeat or downbeat/depressed" code="gen-risk-upbeat" value-mg="((0 0) (10 1))"/></node>
				<node label="degree to which the person is making sense" code="gen-coherence" value-mg="((0 0) (10 1))"/></node>
			<node label="body language and expression" code="gen-body-face" filter-q="" generic-type="gd">
				<node label="body language indicating distress" code="gen-distrss-b-lang" value-mg="((0 0) (10 1))"/>
				<node label="movements, posture, facial expression indicating low mood" code="gen-low-mood" value-mg="((0 0) (10 1))"/>
				<node label="aggressive/threatening movements, posture, or expression" code="gen-threat-move" value-mg="((0 0) (10 1))"/>
				<node label="preoccupied/detached demeanour" code="gen-detached" value-mg="((0 0) (10 1))"/>
				<node label="eyes" code="gen-eyes" generic-type="gd">
					<node label="avoid eye contact" code="gen-avoid-eye-contact" value-mg="((0 0) (10 1))"/>
					<node label="eye movement" code="gen-eye-movement" value-mg="((UNRESPONSIVE-GLAZED 1) (APPROPRIATE 0) (FIXED-STARING 1) (DARTING 1))" generic-type="gd" generic-datum="gd"/></node>
			</node>
			<node label="congruence of physical, verbal, and emotional presentation" code="gen-congruence" value-mg="((0 0) (10 1))"/></node>
		<node label="demographics" code="gen-demog" generic-type="gd">
			<node label="age" code="gen-age" value-mg="((14 0) (20 1) (30 0.5) (50 0) (60 0.3) (80 1))" generic-type="gd" generic-datum="gd"/>
			<node label="gender" code="gen-gender" value-mg="((MALE 1) (FEMALE 0))" generic-type="gd" generic-datum="gd"/>
			<node label="relationship status" code="gen-marital-status" filter-q="">
				<node label="living with partner" code="partner-share-acc" value-mg="((no 1)(yes 0))"/></node>
			<node label="occupants sharing accommodation other than a partner" code="gen-accom-share" filter-q="">
				<node label="Dependents" code="gen-accom-depndnts" filter-q="">
					<node label="number of dependents" code="gen-accom-num-dep" value-mg="((0 0) (8 1))"/>
					<node label="age of youngest dependent" code="gen-dep-ygnst-age" value-mg="((0 1) (10 0.7) (18 0))"/></node>
				<node label="number of non-dependents sharing accommodation" code="gen-accm-share-nd" value-mg="((0 0)(5 1))"/></node>
			<node label="ethnicity" code="gen-ethnicity" value-mg="((WHITE-BRITISH 0) (WHITE-IRISH 0) (OTHER-WHITE 0) (WHITE-BLACK-CARIBBEAN 0) (WHITE-BLACK-AFRICAN 0)    (WHITE-ASIAN 0) (OTHER-MIXED 0) (INDIAN 0) (PAKISTANI 0) (BANGLADESHI 0) (OTHER-ASIAN 0) (BLACK-CARIBBEAN 0)    (BLACK-AFRICAN 0) (OTHER-BLACK 0) (CHINESE 0) (OTHER-ETHNIC 0))" generic-type="gd" generic-datum="gd"/>
			<node label="Multi-Agency Public Protection Arrangements" code="mappa" value-mg="((YES 1)(NO 0))" generic-type="gd" generic-datum="gd"/></node>
	</node>
	<node label="self-harm" code="sh" value-mg="((0 0) (10 1))">
		<node label="self-harm specific questions" code="sh-specific" layer="0" screening="0" screening-only="true">
			<node label="past and current episodes of self-harm" code="sh-past-curr-ep" layer="0" filter-q="" screening="0">
				<node label="occurrence of self-harm episodes" code="sh-occ-of-ep">
					<node label="self-harming injuries" code="gen-sh-cuts" value-mg="((0 0) (10 1))"/>
					<node label="most recent self-harm episode" code="sh-most-rec-ep" value-mg="((0 1)(14 1)(60 0.5)(365 0))" screening="0"/>
					<node label="multiple self-harm episodes" code="sh-patt-of-eps" filter-q="" screening="0">
						<node label="change in self-harm frequency" code="sh-incrse-eps" value-mg="((DECREASING 0) (SAME 0.5) (INCREASING 1))" layer="0" screening="0"/>
						<node label="first time self-harm episode occurred" code="sh-first-time-ep" value-mg="((0 0.4) (52 0.4))"/>
						<node label="frequency of self-harming episodes" code="sh-freq-eps" value-mg="((DAILY 1) (WEEKLY 0.75) (MONTHLY 0.3) (LESS-THAN-MONTHLY 0))"/></node>
				</node>
				<node label="seriousness of self-harm episodes" code="sh-seriousns-eps">
					<node label="chance of being helped after self-harming" code="sh-hlp-after" value-mg="((0 0) (10 1))"/>
					<node label="potential lethality of self-harm method" code="sh-lethality-mth" value-mg="((0 0) (10 1))" screening="0"/>
					<node label="change in self-harming method" code="sh-change-mth" value-mg="((no-change 0) (recent-change 1))"/></node>
				<node label="self-harming not a cry for help" code="sh-for-hlp-diff" value-mg="((0 0) (10 1))"/>
				<node label="self-harm helping to cope with difficulties" code="sh-hlp-cope-diff" value-mg="((yes 0) (somewhat 0.5) (no 1))"/></node>
			<node label="current self-harm situation and context" code="self-harm-curr-sit-behav">
				<node label="potential triggers for prospective self-harm" code="sh-pot-triggs-p" layer="0" screening="0">
					<node label="potential triggers of self-harm" code="sh-pot-triggs" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
					<node label="potential triggers match those previously triggering self-harm" code="sh-pot-trigs-mtch" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
					<node label="family history of self-harm" code="sh-family-hist" value-mg="((YES 1) (NO 0))"/></node>
				<node label="self-harm ideation" code="sh-ideation" layer="0" filter-q="" screening="0">
					<node label="strength, intensity, intrusiveness, and persistence of self-harm ideation" code="sh-strength" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
					<node label="frequency of self-harm ideation" code="sh-freq-ideatn" value-mg="((DAILY 1) (WEEKLY 0.5) (MONTHLY 0.2) (LESS-THAN-MONTHLY 0))"/></node>
			</node>
		</node>
		<node label="state of mind" code="gen-state-mind" generic-type="gd">
			<node label="feelings/emotions" code="gen-feel-emot" layer="0" screening="0" generic-type="gd">
				<node label="mood swings/lability" code="gen-mood-swings" value-mg="((0 0) (10 1))"/>
				<node label="negative feelings about the self" code="gen-negative-self" value-mg="((0 0) (10 1))" pathways="(wellbeing ptsd)"/>
				<node label="hopelessness" code="gen-hopeless" header="Questions on hopelessness" generic-type="g">
					<node label="life not worth living" code="gen-life-not-livng" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
					<node label="plans for the future" code="gen-plans-future" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/></node>
				<node label="angry emotions" code="gen-angry-emotns" value-mg="((0 0) (10 1))" pathways="(ptsd)" screening="0"/>
				<node label="anxiety-based emotions" code="gen-anx-emotns" value-mg="((0 0) (10 1))" pathways="(wellbeing ptsd)"/>
				<node label="helplessness" code="gen-helpless" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
				<node label="sad/downbeat" code="gen-sad" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
				<node label="distress" code="gen-distress" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
				<node label="jealousy" code="gen-jealous" value-mg="((0 0) (10 1))"/></node>
			<node label="person's perspective of self worth" code="gen-self-worth-p" layer="0" screening="0" generic-type="gd">
				<node label="worthlessness" code="worthlessness" value-mg="((0 0) (10 1))" layer="0" pathways="(wellbeing)" screening="0"/>
				<node label="grandiosity" code="grandiosity" value-mg="((0 0) (10 1))"/></node>
		</node>
		<node label="personality and way of thinking" code="gen-person-thinking" generic-type="gd">
			<node label="personality issues" code="gen-personality" layer="0" screening="0" generic-type="gd">
				<node label="impulsiveness" code="gen-impulse" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
				<node label="assertiveness" code="gen-assertive" value-mg="((NOT-ASSERTIVE 1) (SOMEWHAT-ASSERTIVE 0.3) (NORMALLY-ASSERTIVE 0) (VERY-ASSERTIVE 0) (EXTREMELY-ASSERTIVE 0))" generic-type="gd" generic-datum="gd"/>
				<node label="ability to empathise" code="gen-empathy-abil" value-mg="((0 0) (10 1))"/>
				<node label="dependence" code="gen-dependence" value-mg="((0 0) (10 1))"/>
				<node label="controlling/organisational approach" code="gen-controlling" value-mg="((chaotic 0.5) (disorganised 0.2) (normal 0) (very-organised 0.5)(obsessional-perfectionist 1))" generic-type="gd" generic-datum="gd"/>
				<node label="capacity to cope with major life stresses" code="gen-coping-abil" value-mg="((0 0) (10 1))"/>
				<node label="hostility" code="gen-hostile" value-mg="((0 0) (10 1))" pathways="(ptsd)" screening="0"/>
				<node label="reliability" code="gen-reliable" value-mg="((0 0) (10 1))"/>
				<node label="personality disorder" code="gen-pers-dis" value-mg="((YES 1) (NO 0))"/></node>
			<node label="problems with mental faculties/cognitive capacity" code="ment-fac" layer="0" filter-q="" pathways="(ptsd)" generic-type="g">
				<node label="impaired cognitive function" code="gen-impaird-cog" value-mg="((none 0)(mild 0.3)(moderate 0.6)(severe 1))"/>
				<node label="changes in thinking processes and memory" code="gen-cog-think-mem" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
				<node label="concentration" code="gen-concentr" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
				<node label="learning disabilities" code="gen-learn-disab" value-mg="((none 0)(mild 0.3)(moderate 0.6)(severe 0.8) (profound 1))"/></node>
			<node label="insight and responsibility" code="insight-resp" layer="0" generic-type="g">
				<node label="insight into behaviour and consequences" code="gen-insght-behvr" value-mg="((0 0) (10 1))"/>
				<node label="responsibility for impact of behaviour on others" code="gen-resp-impct-oth" value-mg="((0 0) (10 1))"/>
				<node label="need for help with difficulties" code="gen-nd-hlp-diff" value-mg="((0 0) (10 1))"/></node>
		</node>
		<node label="health and care" code="gen-health-care" generic-type="gd">
			<node label="history of mental health problems" code="mental-health" layer="0" filter-q="" screening="0">
				<node label="clinical diagnosis of depression" code="clin-depression" layer="0" filter-q="" screening="0">
					<node label="stage of depression" code="gen-dep-stage" value-mg="((FIRST-DIAGNOSIS 1) (RECOVERY-SINGLE-EPISODE 0) (RECOVERY-REPEAT-EPISODES 0.4) (RELAPSE 1))" layer="0" screening="0"/></node>
				<node label="current symptoms of mental illness" code="gen-mntl-cur-sympt" layer="0" filter-q="" screening="0">
					<node label="voice hallucinations" code="gen-voice-hal" layer="0" filter-q="" screening="0" generic-type="g">
						<node label="likelihood of acting on the voices" code="gen-prob-act-voice" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
						<node label="type of voices" code="gen-voices-type">
							<node label="danger of voices to self" code="gen-voice-dang-s" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
							<node label="danger of voices to others" code="gen-voice-dang-o" value-mg="((0 0) (10 1))" layer="0" screening="0"/></node>
					</node>
					<node label="paranoid delusions" code="gen-paranoid-del" layer="0" filter-q="" screening="0" generic-type="g">
						<node label="likelihood of acting on delusions" code="gen-prob-act-par-del" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
						<node label="type of paranoid delusions" code="gen-type-paranoid-del">
							<node label="thoughts about particular individuals" code="gen-paran-del-spec" value-mg="((0 0) (10 1))"/>
							<node label="being harmed, killed, or persecuted" code="gen-paran-del-pers" value-mg="((0 0) (10 1))"/></node>
					</node>
					<node label="mania/hypomania" code="gen-mania" value-mg="((0 0) (10 1))"/></node>
			</node>
			<node label="physical health problems" code="gen-phys-hlth-prb" layer="0" generic-type="gd">
				<node label="chronic disease" code="gen-chronic-disease" filter-q="" multiple-tick="" generic-type="gd">
					<node label="tinnitus" code="tinnitus" value-mg="((yes 1) (no 0))"/>
					<node label="diabetes" code="diabetes" value-mg="((yes 1) (no 0))"/>
					<node label="multiple sclerosis" code="multiple-sclerosis" value-mg="((yes 1) (no 0))"/>
					<node label="asthma" code="asthma" value-mg="((yes 1) (no 0))"/>
					<node label="heart disease" code="heart-disease" value-mg="((yes 1) (no 0))"/>
					<node label="kidney disease" code="kidney-disease" value-mg="((yes 1) (no 0))"/>
					<node label="lung disease" code="lung-disease" value-mg="((yes 1) (no 0))"/>
					<node label="arthritis" code="arthritis" value-mg="((yes 1) (no 0))"/>
					<node label="high blood pressure" code="high-blood-pressure" value-mg="((yes 1) (no 0))"/>
					<node label="any other condition" code="other" value-mg="((yes 1) (no 0))"/></node>
				<node label="when life-threatening or degenerative illness first diagnosed" code="gen-phys-hlth-deg-diag" value-mg="((3 1) (36 0))"/>
				<node label="pain" code="gen-phys-hlth-pain" value-mg="((0 0) (10 1))"/>
				<node label="mobility and dexterity" code="gen-phys-hlth-disa" value-mg="((0 0) (10 1))"/>
				<node label="communication impairment" code="gen-com-imp" value-mg="((0 0) (10 1))"/>
				<node label="deterioration in physical health" code="gen-phys-hlth-det" value-mg="((0 0) (10 1))"/></node>
			<node label="concordance with health services/medication/therapies" code="gen-meds-therpy" layer="0" generic-type="g">
				<node label="concordance" code="gen-meds-concord" value-mg="((0 0) (10 1))"/>
				<node label="person's perception of the supportiveness of service received" code="gen-serv-perc-supp" value-mg="((0 0) (10 1))"/>
				<node label="perceived benefit of medication/therapies" code="gen-med-perc-benft" value-mg="((0 0) (10 1))"/></node>
		</node>
		<node label="involvement with life and others" code="gen-involve-social" generic-type="gd">
			<node label="motivation and engagement with world" code="motive-eng" layer="0">
				<node label="engagement with world" code="gen-eng-world" generic-type="gd">
					<node label="physical withdrawal from world" code="gen-phys-withd" value-mg="((0 0) (10 1))"/>
					<node label="mental withdrawal" code="gen-mental-withd" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/></node>
				<node label="general motivation in life" code="gen-motivation" value-mg="((0 0) (10 1))" pathways="(wellbeing ptsd)"/>
				<node label="lack of energy, drive, or enthusiasm" code="gen-listless" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/></node>
			<node label="social context" code="gen-soc-contxt" layer="0" pathways="(ptsd)" generic-type="gd">
				<node label="relationships" code="gen-relatnshps" layer="0" generic-type="gd">
					<node label="external network of relationships" code="gen-net-relat" value-mg="((0 0) (10 1))" pathways="(wellbeing ptsd)"/>
					<node label="nature of relationships" code="gen-relat-nature">
						<node label="any supportive relationships" code="gen-relat-supp" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
						<node label="detrimental relationships" code="gen-relat-detr" value-mg="((0 0) (10 1))"/></node>
					<node label="detrimental changes to relationships" code="gen-relat-detr-chg" value-mg="((0 0) (10 1))"/></node>
				<node label="living arrangements" code="gen-living-arr" layer="0" generic-type="gd">
					<node label="frequency of moving accommodation" code="gen-move-freq" value-mg="((LESS-THAN-EVERY-YEAR 0) (ONCE-EVERY-YEAR 0.5) (SEVERAL-TIMES-YEAR 0.8) (ONCE-A-MONTH-OR-MORE 1))"/>
					<node label="losing accommodation" code="gen-accom-loss" value-mg="((yes 1)(no 0))"/>
					<node label="support at home" code="gen-home-type" value-mg="((HOMELESS 1) (HOSTEL 0.8) (TWENTY-FOUR-HOUR-CARE-OR-SUPERVISION 0) (daily-support 0.1)(limited-support 0.2)(no-support 0.5))"/>
					<node label="neighbourhood" code="gen-neighbrhd">
						<node label="isolated accommodation" code="gen-isol-accom" value-mg="((0 0) (10 1))"/>
						<node label="risky neighbourhood" code="gen-neigbrhd-rsky" value-mg="((0 0) (10 1))"/></node>
					<node label="state of accommodation" code="gen-accom-state">
						<node label="care of home" code="gen-accom-hm-care" value-mg="((0 0) (10 1))"/>
						<node label="habitable accommodation" code="gen-accom-habitbl" value-mg="((0 0) (10 1))"/></node>
				</node>
				<node label="financial and employment concerns" code="gen-finance-empl" layer="0" generic-type="gd">
					<node label="financial problems" code="gen-finance-prob" header="Questions on financial problems">
						<node label="anxiety about perceived level of debts" code="gen-perc-debt-anx" value-mg="((0 0) (10 1))"/>
						<node label="chronic poverty" code="gen-poverty" value-mg="((0 0) (10 1))"/></node>
					<node label="employment" code="gen-employment" header="Questions on employment">
						<node label="frequency of changing jobs" code="gen-job-chg-frq" value-mg="((0 0) (10 1))"/>
						<node label="recent or potential detrimental change to employment" code="gen-rec-bad-job-ch" value-mg="((0 0) (10 1))"/></node>
				</node>
			</node>
			<node label="general current behaviour" code="gen-currnt-bhvr" layer="0" pathways="(ptsd)" generic-type="gd">
				<node label="reckless risk taking" code="gen-rsk-behavr" value-mg="((0 0) (10 1))" pathways="(ptsd)"/>
				<node label="unintentional risk making" code="gen-unint-risk-behavr" value-mg="((0 0) (10 1))"/>
				<node label="sleep disturbance" code="gen-sleep-dist" value-mg="((0 0) (10 1))" pathways="(ptsd)"/>
				<node label="uncharacteristic recent change in behaviour" code="gen-unusl-rec-bhvr" value-mg="((0 0) (10 1))"/>
				<node label="challenging behaviour" code="gen-chall-bhvr" value-mg="((0 0) (10 1))"/>
				<node label="daily activity" code="gen-day-actvty">
					<node label="structure of day" code="gen-day-struct" value-mg="((0 0) (10 1))"/>
					<node label="general level of activity during the day" code="gen-day-actvty-lev" value-mg="((INACTIVE 0.3) (UNDERACTIVE 0.1) (NORMAL 0) (OVERACTIVE 0.5) (HYPERACTIVE 1))" generic-type="gd" generic-datum="gd"/></node>
				<node label="appropriateness of diet" code="gen-app-diet" header="Questions about diet" generic-type="g">
					<node label="eating healthily" code="gen-diet-eating" value-mg="((0 0) (10 1))"/>
					<node label="weight" code="gen-diet-weight">
						<node label="person's weight" code="gen-diet-weigt-ext" value-mg="((EXTREME-UNDERWEIGHT 1) (UNDERWEIGHT 0.5) (WEIGHT-OK 0) (OVERWEIGHT 0.5) (EXTREME-OVERWEIGHT 1))"/>
						<node label="extreme weight change" code="gen-diet-weigt-chg" value-mg="((0 0) (10 1))"/></node>
					<node label="drinking" code="gen-diet-drink" value-mg="((0 0) (10 1))"/></node>
			</node>
			<node label="substance misuse" code="gen-subs-misuse" layer="0" filter-q="" screening="0" generic-type="gd">
				<node label="detrimental effects of alcohol misuse" code="gen-alc-misuse" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
				<node label="detrimental effects of drugs misuse" code="gen-drug-misuse" value-mg="((0 0) (10 1))" layer="0" screening="0"/></node>
		</node>
		<node label="adverse life events" code="adv-life-event" filter-q="" pathways="(ptsd)" generic-type="gd">
			<node label="abuse to person" code="gen-life-abuse" filter-q="" pathways="(ptsd)" generic-type="g">
				<node label="sexual abuse" code="gen-life-sex-abuse" filter-q="" pathways="(ptsd)">
					<node label="most recent episode of sexual abuse" code="gen-sex-abse-last" value-mg="((0 1) (5 0.5))"/>
					<node label="sexual abuse during childhood (0 to 16)" code="gen-sex-abse-as-ch" value-mg="((YES 1) (NO 0))" pathways="(ptsd)"/></node>
				<node label="physical abuse" code="gen-phys-abse" filter-q="" pathways="(ptsd)">
					<node label="most recent episode of physical abuse" code="gen-phys-abse-last" value-mg="((0 1) (24 0.5))"/>
					<node label="physical abuse during childhood (0 to 16)" code="gen-phy-abse-as-ch" value-mg="((YES 1) (NO 0))" pathways="(ptsd)"/></node>
				<node label="emotional abuse" code="gen-emot-abse" filter-q="" pathways="(ptsd)">
					<node label="most recent episode of emotional abuse" code="gen-emot-abse-last" value-mg="((0 1) (24 0.5))"/>
					<node label="emotional abuse during childhood (0 to 16)" code="gen-emo-abse-as-ch" value-mg="((YES 1) (NO 0))"/></node>
				<node label="financial abuse" code="gen-financial-abuse" value-mg="((YES 1) (NO 0))"/></node>
			<node label="other challenging experiences" code="other-chall-exp" header="Other challenging experiences">
				<node label="forensic/criminal proceedings" code="gen-forensic-proc" filter-q="">
					<node label="current/criminal proceedings" code="gen-forensic-proc-curr" value-mg="((YES 1) (NO 0))"/></node>
				<node label="environment person grew up in" code="gen-env-grew-up" value-mg="((0 0) (10 1))" pathways="(ptsd)"/>
				<node label="eating disorders" code="gen-eating-dis" value-mg="((0 0) (10 1))"/>
				<node label="educational experience" code="gen-educ-expr" value-mg="((0 0) (10 1))" pathways="(ptsd)"/>
				<node label="serious injury" code="serious-injury" value-mg="((0 0) (10 1))" pathways="(ptsd)"/></node>
		</node>
		<node label="person's behavioural presentation during assessment" code="gen-presentation" filter-q="" screening="0" generic-type="gd">
			<node label="person's engagement with assessor" code="gen-engagement" filter-q="" generic-type="gd">
				<node label="rapport" code="gen-rapport" value-mg="((0 0) (10 1))"/>
				<node label="person's responsiveness" code="gen-responsve" value-mg="((0 0) (10 1))"/>
				<node label="assessor's uneasiness about the person" code="gen-gut-assmnt" value-mg="((0 0) (10 1))"/></node>
			<node label="verbal indicators of risk" code="gen-risk-verbal" filter-q="" generic-type="gd">
				<node label="tone" code="gen-risk-tone">
					<node label="degree of aggression/hostility" code="gen-risk-aggrsv" value-mg="((0 0) (10 1))"/>
					<node label="how upbeat or downbeat/depressed" code="gen-risk-upbeat" value-mg="((0 0) (10 1))"/></node>
				<node label="degree to which the person is making sense" code="gen-coherence" value-mg="((0 0) (10 1))"/></node>
			<node label="body language and expression" code="gen-body-face" filter-q="" generic-type="gd">
				<node label="body language indicating distress" code="gen-distrss-b-lang" value-mg="((0 0) (10 1))"/>
				<node label="movements, posture, facial expression indicating low mood" code="gen-low-mood" value-mg="((0 0) (10 1))"/>
				<node label="aggressive/threatening movements, posture, or expression" code="gen-threat-move" value-mg="((0 0) (10 1))"/>
				<node label="preoccupied/detached demeanour" code="gen-detached" value-mg="((0 0) (10 1))"/>
				<node label="eyes" code="gen-eyes" generic-type="gd">
					<node label="avoid eye contact" code="gen-avoid-eye-contact" value-mg="((0 0) (10 1))"/>
					<node label="eye movement" code="gen-eye-movement" value-mg="((UNRESPONSIVE-GLAZED 1) (APPROPRIATE 0) (FIXED-STARING 1) (DARTING 1))" generic-type="gd" generic-datum="gd"/></node>
			</node>
			<node label="congruence of physical, verbal, and emotional presentation" code="gen-congruence" value-mg="((0 0) (10 1))"/></node>
		<node label="demographics" code="gen-demog" generic-type="gd">
			<node label="age" code="gen-age" value-mg="((10 0) (15 1) (20 1) (30 0.5) (60 0))" generic-type="gd" generic-datum="gd"/>
			<node label="gender" code="gen-gender" value-mg="((MALE 0) (FEMALE 1))" generic-type="gd" generic-datum="gd"/>
			<node label="relationship status" code="gen-marital-status" filter-q="">
				<node label="living with partner" code="partner-share-acc" value-mg="((no 1)(yes 0))"/></node>
			<node label="occupants sharing accommodation other than a partner" code="gen-accom-share" filter-q="">
				<node label="Dependents" code="gen-accom-depndnts" filter-q="">
					<node label="number of dependents" code="gen-accom-num-dep" value-mg="((0 0) (8 1))"/>
					<node label="age of youngest dependent" code="gen-dep-ygnst-age" value-mg="((0 1) (10 0.7) (18 0))"/></node>
				<node label="number of non-dependents sharing accommodation" code="gen-accm-share-nd" value-mg="((0 0)(5 1))"/></node>
			<node label="ethnicity" code="gen-ethnicity" value-mg="((WHITE-BRITISH 0) (WHITE-IRISH 0) (OTHER-WHITE 0) (WHITE-BLACK-CARIBBEAN 0) (WHITE-BLACK-AFRICAN 0)    (WHITE-ASIAN 0) (OTHER-MIXED 0) (INDIAN 0) (PAKISTANI 0) (BANGLADESHI 0) (OTHER-ASIAN 0) (BLACK-CARIBBEAN 0)    (BLACK-AFRICAN 0) (OTHER-BLACK 0) (CHINESE 0) (OTHER-ETHNIC 0))" generic-type="gd" generic-datum="gd"/>
			<node label="Multi-Agency Public Protection Arrangements" code="mappa" value-mg="((YES 1)(NO 0))" generic-type="gd" generic-datum="gd"/></node>
	</node>
	<node label="harm to others or damage to property" code="hto" value-mg="((0 0) (10 1))">
		<node label="harm/damage specific questions" code="hto-specific" layer="0" screening="0" screening-only="true">
			<node label="past and current episodes of harm or damage" code="hto-past-curr-ep" layer="0" filter-q="" screening="0">
				<node label="targets of harm to others" code="hto-targets" layer="0" screening="0" filter-q="" multiple-tick="" generic-type="gd">
					<node label="carers or family" code="carers-family" value-mg="((yes 1) (no 0))"/>
					<node label="neighbours or people sharing living space" code="shared-accom-neighbours" value-mg="((yes 1) (no 0))"/>
					<node label="friends or colleagues" code="friends-colleagues" value-mg="((yes 1) (no 0))"/>
					<node label="health workers" code="health-workers" value-mg="((yes 1) (no 0))"/>
					<node label="authority figures" code="authority-figs" value-mg="((yes 1) (no 0))"/>
					<node label="those from a different ethnic background" code="ethnic" value-mg="((yes 1) (no 0))"/></node>
				<node label="type and seriousness of harm or damage episodes" code="hto-type">
					<node label="physical or sexual assaults" code="hto-phys-sex" filter-q="" screening="0">
						<node label="any physical assaults" code="hto-any-violent" layer="0" filter-q="" screening="0">
							<node label="seriousness of violent assault/physical abuse" code="hto-violent" value-mg="((0 0) (10 1))" screening="0"/>
							<node label="most recent violent harm to others" code="hto-recent-violent-eps" value-mg="((0 1)(2 1)(52 0.5))" screening="0"/>
							<node label="frequency of physical assaults" code="hto-violent-prev-freq" value-mg="((ONLY-ONCE 0.2)(LESS-THAN-EVERY-YEAR 0.4) (ONCE-EVERY-YEAR 0.6)(SEVERAL-TIMES-YEAR 0.7)(MONTHLY 0.8)(WEEKLY 0.9)(DAILY 1))" screening="0"/>
							<node label="first time physical harm to others occurred" code="hto-first-time-violent-ep" value-mg="((0 0.4) (12 0.4))"/></node>
						<node label="any non-consensual sexual assault" code="hto-any-sex-asslt" filter-q="" screening="0">
							<node label="type of non-consensual sexual assault" code="hto-sex-asslt" value-mg="((INDECENT-EXPOSURE 0.2)(FONDLING 0.4) (ORAL-RAPE 0.8) (ANAL-RAPE 1) (VAGINAL-RAPE 1))" screening="0"/>
							<node label="most recent episode of sexual assault" code="hto-recent-sexual-eps" value-mg="((0 1)(2 1)(52 0.5))" screening="0"/>
							<node label="frequency of sexual assaults" code="hto-sexual-prev-freq" value-mg="((ONLY-ONCE 0.2)(LESS-THAN-EVERY-YEAR 0.4) (ONCE-EVERY-YEAR 0.6)(SEVERAL-TIMES-YEAR 0.7)(MONTHLY 0.8)(WEEKLY 0.9)(DAILY 1))" screening="0"/>
							<node label="first time sexual assault occurred" code="hto-first-time-sexual-ep" value-mg="((0 0.4) (12 0.4))"/></node>
						<node label="history of using weapons" code="hto-weapons-hist" value-mg="((YES 1) (NO 0))" screening="0"/></node>
					<node label="emotional episodes of harm to others" code="hto-emotional-eps" filter-q="" screening="0">
						<node label="seriousness of emotional harm to others" code="hto-emotional-ep" value-mg="((0 0) (10 1))" screening="0"/>
						<node label="most recent episode of emotional abuse" code="hto-recent-emotional-eps" value-mg="((0 1)(2 1)(52 0.5))" screening="0"/>
						<node label="frequency of emotional abuse" code="hto-emotional-prev-freq" value-mg="((ONLY-ONCE 0.2)(LESS-THAN-EVERY-YEAR 0.4) (ONCE-EVERY-YEAR 0.6)(SEVERAL-TIMES-YEAR 0.7)(MONTHLY 0.8)(WEEKLY 0.9)(DAILY 1))" screening="0"/>
						<node label="first episode of emotional abuse" code="hto-first-time-emotional-ep" value-mg="((0 0.4) (12 0.4))"/></node>
					<node label="any deliberate damage to property" code="hto-any-dest-prprty" filter-q="" screening="0">
						<node label="deliberate damage to property" code="hto-dest-prprty" value-mg="((0 0) (10 1))" screening="0"/>
						<node label="most recent deliberate damage to property" code="hto-recent-destructive-eps" value-mg="((0 1) (2 1)(52 0.5))" screening="0"/>
						<node label="frequency of destructive episodes" code="hto-destructive-prev-freq" value-mg="((ONLY-ONCE 0.2)(LESS-THAN-EVERY-YEAR 0.4) (ONCE-EVERY-YEAR 0.6)(SEVERAL-TIMES-YEAR 0.7)(MONTHLY 0.8)(WEEKLY 0.9)(DAILY 1))" screening="0"/>
						<node label="first time deliberate damage to property occurred?" code="hto-first-time-destructive-ep" value-mg="((0 0.4) (12 0.4))"/></node>
					<node label="any fire-setting" code="hto-any-fire-setting" filter-q="" screening="0">
						<node label="fire-setting" code="hto-fire-setting" value-mg="((0 0) (10 1))" screening="0"/>
						<node label="most recent episode of fire setting" code="hto-recent-fire-setting-eps" value-mg="((0 1)(2 1) (52 0.5))" screening="0"/>
						<node label="frequency of fire-setting episodes" code="hto-fire-setting-prev-freq" value-mg="((ONLY-ONCE 0.2)(LESS-THAN-EVERY-YEAR 0.4) (ONCE-EVERY-YEAR 0.6)(SEVERAL-TIMES-YEAR 0.7)(MONTHLY 0.8)(WEEKLY 0.9)(DAILY 1))" screening="0"/>
						<node label="first time fire-setting episode occurred" code="hto-first-time-fire-setting-ep" value-mg="((0 0.4) (12 0.4))"/></node>
					<node label="any abuse of animals" code="hto-any-to-anmls" filter-q="" screening="0">
						<node label="abuse of animals" code="hto-to-anmls" value-mg="((0 0) (10 1))"/>
						<node label="most recent episode of animal abuse" code="hto-recent-animal-eps" value-mg="((0 1)(2 1) (52 0.5))"/>
						<node label="frequency of animal abuse" code="hto-animal-prev-freq" value-mg="((ONLY-ONCE 0.2)(LESS-THAN-EVERY-YEAR 0.4) (ONCE-EVERY-YEAR 0.6)(SEVERAL-TIMES-YEAR 0.7)(MONTHLY 0.8)(WEEKLY 0.9)(DAILY 1))" screening="0"/>
						<node label="first time animal abuse occurred" code="hto-first-time-animal-ep" value-mg="((0 0.4) (12 0.4))"/></node>
				</node>
				<node label="person's current perspective on harm or damage episodes" code="hto-curr-persp-ep" value-mg="((0 0) (10 1))" screening="0"/></node>
			<node label="current harm or damage situation and related behaviour" code="harm-dam-curr-sit-behav">
				<node label="intention for harm or damage" code="hto-intention" layer="0" screening="0">
					<node label="means and ability to carry out harm or damage plan" code="hto-means-plan" value-mg="((0 0) (10 1))"/>
					<node label="physical steps taken to implement harm or damage plan" code="hto-steps-plan" value-mg="((0 0) (10 1))"/>
					<node label="planning to harm a particular person" code="hto-targets-id" value-mg="((YES 1) (NO 0))"/>
					<node label="appearance indicators of harm or damage" code="app-harm-dam" value-mg="((0 0)(10 1))"/>
					<node label="spiritual/religious values/beliefs affecting harm or damage risk" code="hto-religious" value-mg="((STRONGLY-REDUCE 0) (REDUCE 0) (NO-EFFECT 0) (INCREASE 0.5) (STRONGLY-INCREASE 1))"/></node>
				<node label="potential triggers for prospective harm or damage" code="pot-trig-hto" layer="0" screening="0">
					<node label="potential triggers of harm or damage" code="hto-pot-trig" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
					<node label="potential triggers match those previously triggering harm or damage" code="hto-pot-trig-mtch" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
					<node label="interest in violent pursuits" code="gen-violent-purs" value-mg="((0 0) (10 1))"/>
					<node label="family history relating to harm or damage" code="hto-fam-hist" value-mg="((0 0) (10 1))"/></node>
				<node label="ideation about violence" code="hto-ideation-vio" layer="0" filter-q="" screening="0">
					<node label="strength, intensity, intrusiveness, and persistence of harm or damage ideation" code="hto-strgth-ideatn" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
					<node label="high risk content of harm or damage ideation" code="hto-hi-rsk-ideatn" value-mg="((0 0) (10 1))" screening="0"/>
					<node label="frequency of harm or damage ideation" code="hto-freq-ideatn" value-mg="((DAILY 1) (WEEKLY 0.5) (MONTHLY 0.2) (LESS-THAN-MONTHLY 0))"/>
					<node label="thoughts/fantasies of harm or damage linked to real people, events, and circumstances" code="hto-ideatn-link" value-mg="((0 0) (10 1))"/></node>
			</node>
		</node>
		<node label="state of mind" code="gen-state-mind" generic-type="gd">
			<node label="feelings/emotions" code="gen-feel-emot" layer="0" screening="0" generic-type="gd">
				<node label="mood swings/lability" code="gen-mood-swings" value-mg="((0 0) (10 1))"/>
				<node label="negative feelings about the self" code="gen-negative-self" value-mg="((0 0) (10 1))" pathways="(wellbeing ptsd)"/>
				<node label="hopelessness" code="gen-hopeless" header="Questions on hopelessness" generic-type="g">
					<node label="life not worth living" code="gen-life-not-livng" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
					<node label="plans for the future" code="gen-plans-future" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/></node>
				<node label="angry emotions" code="gen-angry-emotns" value-mg="((0 0) (10 1))" pathways="(ptsd)" screening="0"/>
				<node label="anxiety-based emotions" code="gen-anx-emotns" value-mg="((0 0) (10 1))" pathways="(wellbeing ptsd)"/>
				<node label="helplessness" code="gen-helpless" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
				<node label="sad/downbeat" code="gen-sad" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
				<node label="distress" code="gen-distress" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
				<node label="jealousy" code="gen-jealous" value-mg="((0 0) (10 1))"/></node>
			<node label="person's perspective of self worth" code="gen-self-worth-p" layer="0" screening="0" generic-type="gd">
				<node label="worthlessness" code="worthlessness" value-mg="((0 0) (10 1))" layer="0" pathways="(wellbeing)" screening="0"/>
				<node label="grandiosity" code="grandiosity" value-mg="((0 0) (10 1))"/></node>
		</node>
		<node label="personality and way of thinking" code="gen-person-thinking" generic-type="gd">
			<node label="personality issues" code="gen-personality" layer="0" screening="0" generic-type="gd">
				<node label="impulsiveness" code="gen-impulse" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
				<node label="assertiveness" code="gen-assertive" value-mg="((NOT-ASSERTIVE 0) (SOMEWHAT-ASSERTIVE 0.1) (NORMALLY-ASSERTIVE 0.2) (VERY-ASSERTIVE 0.5) (EXTREMELY-ASSERTIVE 1))" generic-type="gd" generic-datum="gd"/>
				<node label="ability to empathise" code="gen-empathy-abil" value-mg="((0 0) (10 1))"/>
				<node label="dependence" code="gen-dependence" value-mg="((0 0) (10 1))"/>
				<node label="controlling/organisational approach" code="gen-controlling" value-mg="((chaotic 0) (disorganised 0) (normal 0) (very-organised 0)(obsessional-perfectionist 0))" generic-type="gd" generic-datum="gd"/>
				<node label="capacity to cope with major life stresses" code="gen-coping-abil" value-mg="((0 0) (10 1))"/>
				<node label="hostility" code="gen-hostile" value-mg="((0 0) (10 1))" pathways="(ptsd)" screening="0"/>
				<node label="reliability" code="gen-reliable" value-mg="((0 0) (10 1))"/>
				<node label="personality disorder" code="gen-pers-dis" value-mg="((YES 1) (NO 0))"/></node>
			<node label="problems with mental faculties/cognitive capacity" code="ment-fac" layer="0" filter-q="" pathways="(ptsd)" generic-type="g">
				<node label="impaired cognitive function" code="gen-impaird-cog" value-mg="((none 0)(mild 0.3)(moderate 0.6)(severe 1))"/>
				<node label="changes in thinking processes and memory" code="gen-cog-think-mem" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
				<node label="concentration" code="gen-concentr" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
				<node label="learning disabilities" code="gen-learn-disab" value-mg="((none 0)(mild 0.3)(moderate 0.6)(severe 0.8) (profound 1))"/></node>
			<node label="insight and responsibility" code="insight-resp" layer="0" generic-type="g">
				<node label="insight into behaviour and consequences" code="gen-insght-behvr" value-mg="((0 0) (10 1))"/>
				<node label="responsibility for impact of behaviour on others" code="gen-resp-impct-oth" value-mg="((0 0) (10 1))"/>
				<node label="need for help with difficulties" code="gen-nd-hlp-diff" value-mg="((0 0) (10 1))"/></node>
		</node>
		<node label="health and care" code="gen-health-care" generic-type="gd">
			<node label="history of mental health problems" code="mental-health" layer="0" filter-q="" screening="0">
				<node label="clinical diagnosis of depression" code="clin-depression" layer="0" filter-q="" screening="0">
					<node label="stage of depression" code="gen-dep-stage" value-mg="((FIRST-DIAGNOSIS 1) (RECOVERY-SINGLE-EPISODE 0) (RECOVERY-REPEAT-EPISODES 0.4) (RELAPSE 1))" layer="0" screening="0"/></node>
				<node label="current symptoms of mental illness" code="gen-mntl-cur-sympt" layer="0" filter-q="" screening="0">
					<node label="voice hallucinations" code="gen-voice-hal" layer="0" filter-q="" screening="0" generic-type="g">
						<node label="likelihood of acting on the voices" code="gen-prob-act-voice" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
						<node label="type of voices" code="gen-voices-type">
							<node label="danger of voices to self" code="gen-voice-dang-s" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
							<node label="danger of voices to others" code="gen-voice-dang-o" value-mg="((0 0) (10 1))" layer="0" screening="0"/></node>
					</node>
					<node label="paranoid delusions" code="gen-paranoid-del" layer="0" filter-q="" screening="0" generic-type="g">
						<node label="likelihood of acting on delusions" code="gen-prob-act-par-del" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
						<node label="type of paranoid delusions" code="gen-type-paranoid-del">
							<node label="thoughts about particular individuals" code="gen-paran-del-spec" value-mg="((0 0) (10 1))"/>
							<node label="being harmed, killed, or persecuted" code="gen-paran-del-pers" value-mg="((0 0) (10 1))"/></node>
					</node>
					<node label="mania/hypomania" code="gen-mania" value-mg="((0 0) (10 1))"/></node>
			</node>
			<node label="physical health problems" code="gen-phys-hlth-prb" layer="0" generic-type="gd">
				<node label="chronic disease" code="gen-chronic-disease" filter-q="" multiple-tick="" generic-type="gd">
					<node label="tinnitus" code="tinnitus" value-mg="((yes 1) (no 0))"/>
					<node label="diabetes" code="diabetes" value-mg="((yes 1) (no 0))"/>
					<node label="multiple sclerosis" code="multiple-sclerosis" value-mg="((yes 1) (no 0))"/>
					<node label="asthma" code="asthma" value-mg="((yes 1) (no 0))"/>
					<node label="heart disease" code="heart-disease" value-mg="((yes 1) (no 0))"/>
					<node label="kidney disease" code="kidney-disease" value-mg="((yes 1) (no 0))"/>
					<node label="lung disease" code="lung-disease" value-mg="((yes 1) (no 0))"/>
					<node label="arthritis" code="arthritis" value-mg="((yes 1) (no 0))"/>
					<node label="high blood pressure" code="high-blood-pressure" value-mg="((yes 1) (no 0))"/>
					<node label="any other condition" code="other" value-mg="((yes 1) (no 0))"/></node>
				<node label="when life-threatening or degenerative illness first diagnosed" code="gen-phys-hlth-deg-diag" value-mg="((3 1) (36 0))"/>
				<node label="pain" code="gen-phys-hlth-pain" value-mg="((0 0) (10 1))"/>
				<node label="mobility and dexterity" code="gen-phys-hlth-disa" value-mg="((0 0) (10 1))"/>
				<node label="communication impairment" code="gen-com-imp" value-mg="((0 0) (10 1))"/>
				<node label="deterioration in physical health" code="gen-phys-hlth-det" value-mg="((0 0) (10 1))"/></node>
			<node label="concordance with health services/medication/therapies" code="gen-meds-therpy" layer="0" generic-type="g">
				<node label="concordance" code="gen-meds-concord" value-mg="((0 0) (10 1))"/>
				<node label="person's perception of the supportiveness of service received" code="gen-serv-perc-supp" value-mg="((0 0) (10 1))"/>
				<node label="perceived benefit of medication/therapies" code="gen-med-perc-benft" value-mg="((0 0) (10 1))"/></node>
		</node>
		<node label="involvement with life and others" code="gen-involve-social" generic-type="gd">
			<node label="motivation and engagement with world" code="motive-eng" layer="0">
				<node label="engagement with world" code="gen-eng-world" generic-type="gd">
					<node label="physical withdrawal from world" code="gen-phys-withd" value-mg="((0 0) (10 1))"/>
					<node label="mental withdrawal" code="gen-mental-withd" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/></node>
				<node label="general motivation in life" code="gen-motivation" value-mg="((0 0) (10 1))" pathways="(wellbeing ptsd)"/>
				<node label="lack of energy, drive, or enthusiasm" code="gen-listless" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/></node>
			<node label="social context" code="gen-soc-contxt" layer="0" pathways="(ptsd)" generic-type="gd">
				<node label="relationships" code="gen-relatnshps" layer="0" generic-type="gd">
					<node label="external network of relationships" code="gen-net-relat" value-mg="((0 0) (10 1))" pathways="(wellbeing ptsd)"/>
					<node label="nature of relationships" code="gen-relat-nature">
						<node label="any supportive relationships" code="gen-relat-supp" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
						<node label="detrimental relationships" code="gen-relat-detr" value-mg="((0 0) (10 1))"/></node>
					<node label="detrimental changes to relationships" code="gen-relat-detr-chg" value-mg="((0 0) (10 1))"/></node>
				<node label="living arrangements" code="gen-living-arr" layer="0" generic-type="gd">
					<node label="frequency of moving accommodation" code="gen-move-freq" value-mg="((LESS-THAN-EVERY-YEAR 0) (ONCE-EVERY-YEAR 0.5) (SEVERAL-TIMES-YEAR 0.8) (ONCE-A-MONTH-OR-MORE 1))"/>
					<node label="losing accommodation" code="gen-accom-loss" value-mg="((yes 1)(no 0))"/>
					<node label="support at home" code="gen-home-type" value-mg="((HOMELESS 1) (HOSTEL 0.8) (TWENTY-FOUR-HOUR-CARE-OR-SUPERVISION 0) (daily-support 0.1)(limited-support 0.2)(no-support 0.5))"/>
					<node label="neighbourhood" code="gen-neighbrhd">
						<node label="isolated accommodation" code="gen-isol-accom" value-mg="((0 0) (10 1))"/>
						<node label="risky neighbourhood" code="gen-neigbrhd-rsky" value-mg="((0 0) (10 1))"/></node>
					<node label="state of accommodation" code="gen-accom-state">
						<node label="care of home" code="gen-accom-hm-care" value-mg="((0 0) (10 1))"/>
						<node label="habitable accommodation" code="gen-accom-habitbl" value-mg="((0 0) (10 1))"/></node>
				</node>
				<node label="financial and employment concerns" code="gen-finance-empl" layer="0" generic-type="gd">
					<node label="financial problems" code="gen-finance-prob" header="Questions on financial problems">
						<node label="anxiety about perceived level of debts" code="gen-perc-debt-anx" value-mg="((0 0) (10 1))"/>
						<node label="chronic poverty" code="gen-poverty" value-mg="((0 0) (10 1))"/></node>
					<node label="employment" code="gen-employment" header="Questions on employment">
						<node label="frequency of changing jobs" code="gen-job-chg-frq" value-mg="((0 0) (10 1))"/>
						<node label="recent or potential detrimental change to employment" code="gen-rec-bad-job-ch" value-mg="((0 0) (10 1))"/></node>
				</node>
			</node>
			<node label="general current behaviour" code="gen-currnt-bhvr" layer="0" pathways="(ptsd)" generic-type="gd">
				<node label="reckless risk taking" code="gen-rsk-behavr" value-mg="((0 0) (10 1))" pathways="(ptsd)"/>
				<node label="unintentional risk making" code="gen-unint-risk-behavr" value-mg="((0 0) (10 1))"/>
				<node label="sleep disturbance" code="gen-sleep-dist" value-mg="((0 0) (10 1))" pathways="(ptsd)"/>
				<node label="uncharacteristic recent change in behaviour" code="gen-unusl-rec-bhvr" value-mg="((0 0) (10 1))"/>
				<node label="challenging behaviour" code="gen-chall-bhvr" value-mg="((0 0) (10 1))"/>
				<node label="daily activity" code="gen-day-actvty">
					<node label="structure of day" code="gen-day-struct" value-mg="((0 0) (10 1))"/>
					<node label="general level of activity during the day" code="gen-day-actvty-lev" value-mg="((INACTIVE 0) (UNDERACTIVE 0) (NORMAL 0) (OVERACTIVE 0.5) (HYPERACTIVE 1))" generic-type="gd" generic-datum="gd"/></node>
				<node label="appropriateness of diet" code="gen-app-diet" header="Questions about diet" generic-type="g">
					<node label="eating healthily" code="gen-diet-eating" value-mg="((0 0) (10 1))"/>
					<node label="weight" code="gen-diet-weight">
						<node label="person's weight" code="gen-diet-weigt-ext" value-mg="((EXTREME-UNDERWEIGHT 1) (UNDERWEIGHT 0.5) (WEIGHT-OK 0) (OVERWEIGHT 0.5) (EXTREME-OVERWEIGHT 1))"/>
						<node label="extreme weight change" code="gen-diet-weigt-chg" value-mg="((0 0) (10 1))"/></node>
					<node label="drinking" code="gen-diet-drink" value-mg="((0 0) (10 1))"/></node>
			</node>
			<node label="substance misuse" code="gen-subs-misuse" layer="0" filter-q="" screening="0" generic-type="gd">
				<node label="detrimental effects of alcohol misuse" code="gen-alc-misuse" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
				<node label="detrimental effects of drugs misuse" code="gen-drug-misuse" value-mg="((0 0) (10 1))" layer="0" screening="0"/></node>
		</node>
		<node label="adverse life events" code="adv-life-event" filter-q="" pathways="(ptsd)" generic-type="gd">
			<node label="abuse to person" code="gen-life-abuse" filter-q="" pathways="(ptsd)" generic-type="g">
				<node label="sexual abuse" code="gen-life-sex-abuse" filter-q="" pathways="(ptsd)">
					<node label="most recent episode of sexual abuse" code="gen-sex-abse-last" value-mg="((0 1) (5 0.5))"/>
					<node label="sexual abuse during childhood (0 to 16)" code="gen-sex-abse-as-ch" value-mg="((YES 1) (NO 0))" pathways="(ptsd)"/></node>
				<node label="physical abuse" code="gen-phys-abse" filter-q="" pathways="(ptsd)">
					<node label="most recent episode of physical abuse" code="gen-phys-abse-last" value-mg="((0 1) (24 0.5))"/>
					<node label="physical abuse during childhood (0 to 16)" code="gen-phy-abse-as-ch" value-mg="((YES 1) (NO 0))" pathways="(ptsd)"/></node>
				<node label="emotional abuse" code="gen-emot-abse" filter-q="" pathways="(ptsd)">
					<node label="most recent episode of emotional abuse" code="gen-emot-abse-last" value-mg="((0 1) (24 0.5))"/>
					<node label="emotional abuse during childhood (0 to 16)" code="gen-emo-abse-as-ch" value-mg="((YES 1) (NO 0))"/></node>
				<node label="financial abuse" code="gen-financial-abuse" value-mg="((YES 1) (NO 0))"/></node>
			<node label="other challenging experiences" code="other-chall-exp" header="Other challenging experiences">
				<node label="forensic/criminal proceedings" code="gen-forensic-proc" filter-q="">
					<node label="current/criminal proceedings" code="gen-forensic-proc-curr" value-mg="((YES 1) (NO 0))"/></node>
				<node label="environment person grew up in" code="gen-env-grew-up" value-mg="((0 0) (10 1))" pathways="(ptsd)"/>
				<node label="eating disorders" code="gen-eating-dis" value-mg="((0 0) (10 1))"/>
				<node label="educational experience" code="gen-educ-expr" value-mg="((0 0) (10 1))" pathways="(ptsd)"/>
				<node label="serious injury" code="serious-injury" value-mg="((0 0) (10 1))" pathways="(ptsd)"/></node>
		</node>
		<node label="person's behavioural presentation during assessment" code="gen-presentation" filter-q="" screening="0" generic-type="gd">
			<node label="person's engagement with assessor" code="gen-engagement" filter-q="" generic-type="gd">
				<node label="rapport" code="gen-rapport" value-mg="((0 0) (10 1))"/>
				<node label="person's responsiveness" code="gen-responsve" value-mg="((0 0) (10 1))"/>
				<node label="assessor's uneasiness about the person" code="gen-gut-assmnt" value-mg="((0 0) (10 1))"/></node>
			<node label="verbal indicators of risk" code="gen-risk-verbal" filter-q="" generic-type="gd">
				<node label="tone" code="gen-risk-tone">
					<node label="degree of aggression/hostility" code="gen-risk-aggrsv" value-mg="((0 0) (10 1))"/>
					<node label="how upbeat or downbeat/depressed" code="gen-risk-upbeat" value-mg="((0 0) (10 1))"/></node>
				<node label="degree to which the person is making sense" code="gen-coherence" value-mg="((0 0) (10 1))"/></node>
			<node label="body language and expression" code="gen-body-face" filter-q="" generic-type="gd">
				<node label="body language indicating distress" code="gen-distrss-b-lang" value-mg="((0 0) (10 1))"/>
				<node label="movements, posture, facial expression indicating low mood" code="gen-low-mood" value-mg="((0 0) (10 1))"/>
				<node label="aggressive/threatening movements, posture, or expression" code="gen-threat-move" value-mg="((0 0) (10 1))"/>
				<node label="preoccupied/detached demeanour" code="gen-detached" value-mg="((0 0) (10 1))"/>
				<node label="eyes" code="gen-eyes" generic-type="gd">
					<node label="avoid eye contact" code="gen-avoid-eye-contact" value-mg="((0 0) (10 1))"/>
					<node label="eye movement" code="gen-eye-movement" value-mg="((UNRESPONSIVE-GLAZED 1) (APPROPRIATE 0) (FIXED-STARING 1) (DARTING 1))" generic-type="gd" generic-datum="gd"/></node>
			</node>
			<node label="congruence of physical, verbal, and emotional presentation" code="gen-congruence" value-mg="((0 0) (10 1))"/></node>
		<node label="demographics" code="gen-demog" generic-type="gd">
			<node label="age" code="gen-age" value-mg="((12 0) (20 1) (25 1) (35 0.5) (50 0))" generic-type="gd" generic-datum="gd"/>
			<node label="gender" code="gen-gender" value-mg="((MALE 1) (FEMALE 0))" generic-type="gd" generic-datum="gd"/>
			<node label="relationship status" code="gen-marital-status" filter-q="">
				<node label="living with partner" code="partner-share-acc" value-mg="((no 1)(yes 0))"/></node>
			<node label="occupants sharing accommodation other than a partner" code="gen-accom-share" filter-q="">
				<node label="Dependents" code="gen-accom-depndnts" filter-q="">
					<node label="number of dependents" code="gen-accom-num-dep" value-mg="((0 0) (8 1))"/>
					<node label="age of youngest dependent" code="gen-dep-ygnst-age" value-mg="((0 1) (10 0.7) (18 0))"/></node>
				<node label="number of non-dependents sharing accommodation" code="gen-accm-share-nd" value-mg="((0 0)(5 1))"/></node>
			<node label="ethnicity" code="gen-ethnicity" value-mg="((WHITE-BRITISH 0) (WHITE-IRISH 0) (OTHER-WHITE 0) (WHITE-BLACK-CARIBBEAN 0) (WHITE-BLACK-AFRICAN 0)    (WHITE-ASIAN 0) (OTHER-MIXED 0) (INDIAN 0) (PAKISTANI 0) (BANGLADESHI 0) (OTHER-ASIAN 0) (BLACK-CARIBBEAN 0)    (BLACK-AFRICAN 0) (OTHER-BLACK 0) (CHINESE 0) (OTHER-ETHNIC 0))" generic-type="gd" generic-datum="gd"/>
			<node label="Multi-Agency Public Protection Arrangements" code="mappa" value-mg="((YES 1)(NO 0))" generic-type="gd" generic-datum="gd"/></node>
	</node>
	<node label="risk to dependents" code="risk-dep" _FIXME="TODO - replace mg-deviation-threshold attrib with a real version" value-mg="((0 0) (10 1))">
		<node label="dependents risk-specific questions" code="dependents-specific" layer="0" screening="0" screening-only="true">
			<node label="child protection issues" code="child-prot" value-mg="((yes 1) (no 0))" layer="0" screening="0"/></node>
	</node>
	<node label="self neglect" code="sn" value-mg="((0 0) (10 1))">
		<node label="appearance indicators of self neglect" code="sn-appearnce" layer="0" filter-q="" screening="0" generic-type="g">
			<node label="hair and clothing indicative of self neglect" code="sn-hair-clothes" value-mg="((0 0) (10 1))"/>
			<node label="personal hygiene" code="sn-hygiene" value-mg="((0 0) (10 1))" generic-type="g"/>
			<node label="recent change in appearance of self neglect" code="sn-recnt-app-chnge" value-mg="((0 0) (10 1))"/>
			<node label="skin" code="sn-skin" value-mg="((0 0) (10 1))"/></node>
		<node label="state of mind" code="gen-state-mind" generic-type="gd">
			<node label="feelings/emotions" code="gen-feel-emot" layer="0" screening="0" generic-type="gd">
				<node label="mood swings/lability" code="gen-mood-swings" value-mg="((0 0) (10 1))"/>
				<node label="negative feelings about the self" code="gen-negative-self" value-mg="((0 0) (10 1))" pathways="(wellbeing ptsd)"/>
				<node label="hopelessness" code="gen-hopeless" header="Questions on hopelessness" generic-type="g">
					<node label="life not worth living" code="gen-life-not-livng" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
					<node label="plans for the future" code="gen-plans-future" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/></node>
				<node label="angry emotions" code="gen-angry-emotns" value-mg="((0 0) (10 1))" pathways="(ptsd)" screening="0"/>
				<node label="anxiety-based emotions" code="gen-anx-emotns" value-mg="((0 0) (10 1))" pathways="(wellbeing ptsd)"/>
				<node label="helplessness" code="gen-helpless" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
				<node label="sad/downbeat" code="gen-sad" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
				<node label="distress" code="gen-distress" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
				<node label="jealousy" code="gen-jealous" value-mg="((0 0) (10 1))"/></node>
			<node label="person's perspective of self worth" code="gen-self-worth-p" layer="0" screening="0" generic-type="gd">
				<node label="worthlessness" code="worthlessness" value-mg="((0 0) (10 1))" layer="0" pathways="(wellbeing)" screening="0"/>
				<node label="grandiosity" code="grandiosity" value-mg="((0 0) (10 1))"/></node>
		</node>
		<node label="personality and way of thinking" code="gen-person-thinking" generic-type="gd">
			<node label="personality issues" code="gen-personality" layer="0" screening="0" generic-type="gd">
				<node label="impulsiveness" code="gen-impulse" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
				<node label="assertiveness" code="gen-assertive" value-mg="((NOT-ASSERTIVE 1) (SOMEWHAT-ASSERTIVE 0.3) (NORMALLY-ASSERTIVE 0) (VERY-ASSERTIVE 0) (EXTREMELY-ASSERTIVE 0))" generic-type="gd" generic-datum="gd"/>
				<node label="ability to empathise" code="gen-empathy-abil" value-mg="((0 0) (10 1))"/>
				<node label="dependence" code="gen-dependence" value-mg="((0 0) (10 1))"/>
				<node label="controlling/organisational approach" code="gen-controlling" value-mg="((chaotic 1) (disorganised 0.2) (normal 0) (very-organised 0)(obsessional-perfectionist 0))" generic-type="gd" generic-datum="gd"/>
				<node label="capacity to cope with major life stresses" code="gen-coping-abil" value-mg="((0 0) (10 1))"/>
				<node label="hostility" code="gen-hostile" value-mg="((0 0) (10 1))" pathways="(ptsd)" screening="0"/>
				<node label="reliability" code="gen-reliable" value-mg="((0 0) (10 1))"/>
				<node label="personality disorder" code="gen-pers-dis" value-mg="((YES 1) (NO 0))"/></node>
			<node label="problems with mental faculties/cognitive capacity" code="ment-fac" layer="0" filter-q="" pathways="(ptsd)" generic-type="g">
				<node label="impaired cognitive function" code="gen-impaird-cog" value-mg="((none 0)(mild 0.3)(moderate 0.6)(severe 1))"/>
				<node label="changes in thinking processes and memory" code="gen-cog-think-mem" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
				<node label="concentration" code="gen-concentr" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
				<node label="learning disabilities" code="gen-learn-disab" value-mg="((none 0)(mild 0.3)(moderate 0.6)(severe 0.8) (profound 1))"/></node>
			<node label="insight and responsibility" code="insight-resp" layer="0" generic-type="g">
				<node label="insight into behaviour and consequences" code="gen-insght-behvr" value-mg="((0 0) (10 1))"/>
				<node label="responsibility for impact of behaviour on others" code="gen-resp-impct-oth" value-mg="((0 0) (10 1))"/>
				<node label="need for help with difficulties" code="gen-nd-hlp-diff" value-mg="((0 0) (10 1))"/></node>
		</node>
		<node label="health and care" code="gen-health-care" generic-type="gd">
			<node label="history of mental health problems" code="mental-health" layer="0" filter-q="" screening="0">
				<node label="clinical diagnosis of depression" code="clin-depression" layer="0" filter-q="" screening="0">
					<node label="stage of depression" code="gen-dep-stage" value-mg="((FIRST-DIAGNOSIS 1) (RECOVERY-SINGLE-EPISODE 0) (RECOVERY-REPEAT-EPISODES 0.4) (RELAPSE 1))" layer="0" screening="0"/></node>
				<node label="current symptoms of mental illness" code="gen-mntl-cur-sympt" layer="0" filter-q="" screening="0">
					<node label="voice hallucinations" code="gen-voice-hal" layer="0" filter-q="" screening="0" generic-type="g">
						<node label="likelihood of acting on the voices" code="gen-prob-act-voice" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
						<node label="type of voices" code="gen-voices-type">
							<node label="danger of voices to self" code="gen-voice-dang-s" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
							<node label="danger of voices to others" code="gen-voice-dang-o" value-mg="((0 0) (10 1))" layer="0" screening="0"/></node>
					</node>
					<node label="paranoid delusions" code="gen-paranoid-del" layer="0" filter-q="" screening="0" generic-type="g">
						<node label="likelihood of acting on delusions" code="gen-prob-act-par-del" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
						<node label="type of paranoid delusions" code="gen-type-paranoid-del">
							<node label="thoughts about particular individuals" code="gen-paran-del-spec" value-mg="((0 0) (10 1))"/>
							<node label="being harmed, killed, or persecuted" code="gen-paran-del-pers" value-mg="((0 0) (10 1))"/></node>
					</node>
					<node label="mania/hypomania" code="gen-mania" value-mg="((0 0) (10 1))"/></node>
			</node>
			<node label="physical health problems" code="gen-phys-hlth-prb" layer="0" generic-type="gd">
				<node label="chronic disease" code="gen-chronic-disease" filter-q="" multiple-tick="" generic-type="gd">
					<node label="tinnitus" code="tinnitus" value-mg="((yes 1) (no 0))"/>
					<node label="diabetes" code="diabetes" value-mg="((yes 1) (no 0))"/>
					<node label="multiple sclerosis" code="multiple-sclerosis" value-mg="((yes 1) (no 0))"/>
					<node label="asthma" code="asthma" value-mg="((yes 1) (no 0))"/>
					<node label="heart disease" code="heart-disease" value-mg="((yes 1) (no 0))"/>
					<node label="kidney disease" code="kidney-disease" value-mg="((yes 1) (no 0))"/>
					<node label="lung disease" code="lung-disease" value-mg="((yes 1) (no 0))"/>
					<node label="arthritis" code="arthritis" value-mg="((yes 1) (no 0))"/>
					<node label="high blood pressure" code="high-blood-pressure" value-mg="((yes 1) (no 0))"/>
					<node label="any other condition" code="other" value-mg="((yes 1) (no 0))"/></node>
				<node label="when life-threatening or degenerative illness first diagnosed" code="gen-phys-hlth-deg-diag" value-mg="((3 1) (36 0))"/>
				<node label="pain" code="gen-phys-hlth-pain" value-mg="((0 0) (10 1))"/>
				<node label="mobility and dexterity" code="gen-phys-hlth-disa" value-mg="((0 0) (10 1))"/>
				<node label="communication impairment" code="gen-com-imp" value-mg="((0 0) (10 1))"/>
				<node label="deterioration in physical health" code="gen-phys-hlth-det" value-mg="((0 0) (10 1))"/></node>
			<node label="concordance with health services/medication/therapies" code="gen-meds-therpy" layer="0" generic-type="g">
				<node label="concordance" code="gen-meds-concord" value-mg="((0 0) (10 1))"/>
				<node label="person's perception of the supportiveness of service received" code="gen-serv-perc-supp" value-mg="((0 0) (10 1))"/>
				<node label="perceived benefit of medication/therapies" code="gen-med-perc-benft" value-mg="((0 0) (10 1))"/></node>
		</node>
		<node label="involvement with life and others" code="gen-involve-social" generic-type="gd">
			<node label="motivation and engagement with world" code="motive-eng" layer="0">
				<node label="engagement with world" code="gen-eng-world" generic-type="gd">
					<node label="physical withdrawal from world" code="gen-phys-withd" value-mg="((0 0) (10 1))"/>
					<node label="mental withdrawal" code="gen-mental-withd" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/></node>
				<node label="general motivation in life" code="gen-motivation" value-mg="((0 0) (10 1))" pathways="(wellbeing ptsd)"/>
				<node label="lack of energy, drive, or enthusiasm" code="gen-listless" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/></node>
			<node label="social context" code="gen-soc-contxt" layer="0" pathways="(ptsd)" generic-type="gd">
				<node label="relationships" code="gen-relatnshps" layer="0" generic-type="gd">
					<node label="external network of relationships" code="gen-net-relat" value-mg="((0 0) (10 1))" pathways="(wellbeing ptsd)"/>
					<node label="nature of relationships" code="gen-relat-nature">
						<node label="any supportive relationships" code="gen-relat-supp" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
						<node label="detrimental relationships" code="gen-relat-detr" value-mg="((0 0) (10 1))"/></node>
					<node label="detrimental changes to relationships" code="gen-relat-detr-chg" value-mg="((0 0) (10 1))"/></node>
				<node label="living arrangements" code="gen-living-arr" layer="0" generic-type="gd">
					<node label="frequency of moving accommodation" code="gen-move-freq" value-mg="((LESS-THAN-EVERY-YEAR 0) (ONCE-EVERY-YEAR 0.5) (SEVERAL-TIMES-YEAR 0.8) (ONCE-A-MONTH-OR-MORE 1))"/>
					<node label="losing accommodation" code="gen-accom-loss" value-mg="((yes 1)(no 0))"/>
					<node label="support at home" code="gen-home-type" value-mg="((HOMELESS 1) (HOSTEL 0.8) (TWENTY-FOUR-HOUR-CARE-OR-SUPERVISION 0) (daily-support 0.1)(limited-support 0.2)(no-support 0.5))"/>
					<node label="neighbourhood" code="gen-neighbrhd">
						<node label="isolated accommodation" code="gen-isol-accom" value-mg="((0 0) (10 1))"/>
						<node label="risky neighbourhood" code="gen-neigbrhd-rsky" value-mg="((0 0) (10 1))"/></node>
					<node label="state of accommodation" code="gen-accom-state">
						<node label="care of home" code="gen-accom-hm-care" value-mg="((0 0) (10 1))"/>
						<node label="habitable accommodation" code="gen-accom-habitbl" value-mg="((0 0) (10 1))"/></node>
				</node>
				<node label="financial and employment concerns" code="gen-finance-empl" layer="0" generic-type="gd">
					<node label="financial problems" code="gen-finance-prob" header="Questions on financial problems">
						<node label="anxiety about perceived level of debts" code="gen-perc-debt-anx" value-mg="((0 0) (10 1))"/>
						<node label="chronic poverty" code="gen-poverty" value-mg="((0 0) (10 1))"/></node>
					<node label="employment" code="gen-employment" header="Questions on employment">
						<node label="frequency of changing jobs" code="gen-job-chg-frq" value-mg="((0 0) (10 1))"/>
						<node label="recent or potential detrimental change to employment" code="gen-rec-bad-job-ch" value-mg="((0 0) (10 1))"/></node>
				</node>
			</node>
			<node label="general current behaviour" code="gen-currnt-bhvr" layer="0" pathways="(ptsd)" generic-type="gd">
				<node label="reckless risk taking" code="gen-rsk-behavr" value-mg="((0 0) (10 1))" pathways="(ptsd)"/>
				<node label="unintentional risk making" code="gen-unint-risk-behavr" value-mg="((0 0) (10 1))"/>
				<node label="sleep disturbance" code="gen-sleep-dist" value-mg="((0 0) (10 1))" pathways="(ptsd)"/>
				<node label="uncharacteristic recent change in behaviour" code="gen-unusl-rec-bhvr" value-mg="((0 0) (10 1))"/>
				<node label="challenging behaviour" code="gen-chall-bhvr" value-mg="((0 0) (10 1))"/>
				<node label="daily activity" code="gen-day-actvty">
					<node label="structure of day" code="gen-day-struct" value-mg="((0 0) (10 1))"/>
					<node label="general level of activity during the day" code="gen-day-actvty-lev" value-mg="((INACTIVE 1) (UNDERACTIVE 0.5) (NORMAL 0) (OVERACTIVE 0) (HYPERACTIVE 0))" generic-type="gd" generic-datum="gd"/></node>
				<node label="appropriateness of diet" code="gen-app-diet" header="Questions about diet" generic-type="g">
					<node label="eating healthily" code="gen-diet-eating" value-mg="((0 0) (10 1))"/>
					<node label="weight" code="gen-diet-weight">
						<node label="person's weight" code="gen-diet-weigt-ext" value-mg="((EXTREME-UNDERWEIGHT 1) (UNDERWEIGHT 0.5) (WEIGHT-OK 0) (OVERWEIGHT 0.5) (EXTREME-OVERWEIGHT 1))"/>
						<node label="extreme weight change" code="gen-diet-weigt-chg" value-mg="((0 0) (10 1))"/></node>
					<node label="drinking" code="gen-diet-drink" value-mg="((0 0) (10 1))"/></node>
			</node>
			<node label="substance misuse" code="gen-subs-misuse" layer="0" filter-q="" screening="0" generic-type="gd">
				<node label="detrimental effects of alcohol misuse" code="gen-alc-misuse" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
				<node label="detrimental effects of drugs misuse" code="gen-drug-misuse" value-mg="((0 0) (10 1))" layer="0" screening="0"/></node>
		</node>
		<node label="adverse life events" code="adv-life-event" filter-q="" pathways="(ptsd)" generic-type="gd">
			<node label="abuse to person" code="gen-life-abuse" filter-q="" pathways="(ptsd)" generic-type="g">
				<node label="sexual abuse" code="gen-life-sex-abuse" filter-q="" pathways="(ptsd)">
					<node label="most recent episode of sexual abuse" code="gen-sex-abse-last" value-mg="((0 1) (5 0.5))"/>
					<node label="sexual abuse during childhood (0 to 16)" code="gen-sex-abse-as-ch" value-mg="((YES 1) (NO 0))" pathways="(ptsd)"/></node>
				<node label="physical abuse" code="gen-phys-abse" filter-q="" pathways="(ptsd)">
					<node label="most recent episode of physical abuse" code="gen-phys-abse-last" value-mg="((0 1) (24 0.5))"/>
					<node label="physical abuse during childhood (0 to 16)" code="gen-phy-abse-as-ch" value-mg="((YES 1) (NO 0))" pathways="(ptsd)"/></node>
				<node label="emotional abuse" code="gen-emot-abse" filter-q="" pathways="(ptsd)">
					<node label="most recent episode of emotional abuse" code="gen-emot-abse-last" value-mg="((0 1) (24 0.5))"/>
					<node label="emotional abuse during childhood (0 to 16)" code="gen-emo-abse-as-ch" value-mg="((YES 1) (NO 0))"/></node>
				<node label="financial abuse" code="gen-financial-abuse" value-mg="((YES 1) (NO 0))"/></node>
			<node label="other challenging experiences" code="other-chall-exp" header="Other challenging experiences">
				<node label="forensic/criminal proceedings" code="gen-forensic-proc" filter-q="">
					<node label="current/criminal proceedings" code="gen-forensic-proc-curr" value-mg="((YES 1) (NO 0))"/></node>
				<node label="environment person grew up in" code="gen-env-grew-up" value-mg="((0 0) (10 1))" pathways="(ptsd)"/>
				<node label="eating disorders" code="gen-eating-dis" value-mg="((0 0) (10 1))"/>
				<node label="educational experience" code="gen-educ-expr" value-mg="((0 0) (10 1))" pathways="(ptsd)"/>
				<node label="serious injury" code="serious-injury" value-mg="((0 0) (10 1))" pathways="(ptsd)"/></node>
		</node>
		<node label="person's behavioural presentation during assessment" code="gen-presentation" filter-q="" screening="0" generic-type="gd">
			<node label="person's engagement with assessor" code="gen-engagement" filter-q="" generic-type="gd">
				<node label="rapport" code="gen-rapport" value-mg="((0 0) (10 1))"/>
				<node label="person's responsiveness" code="gen-responsve" value-mg="((0 0) (10 1))"/>
				<node label="assessor's uneasiness about the person" code="gen-gut-assmnt" value-mg="((0 0) (10 1))"/></node>
			<node label="verbal indicators of risk" code="gen-risk-verbal" filter-q="" generic-type="gd">
				<node label="tone" code="gen-risk-tone">
					<node label="degree of aggression/hostility" code="gen-risk-aggrsv" value-mg="((0 0) (10 1))"/>
					<node label="how upbeat or downbeat/depressed" code="gen-risk-upbeat" value-mg="((0 0) (10 1))"/></node>
				<node label="degree to which the person is making sense" code="gen-coherence" value-mg="((0 0) (10 1))"/></node>
			<node label="body language and expression" code="gen-body-face" filter-q="" generic-type="gd">
				<node label="body language indicating distress" code="gen-distrss-b-lang" value-mg="((0 0) (10 1))"/>
				<node label="movements, posture, facial expression indicating low mood" code="gen-low-mood" value-mg="((0 0) (10 1))"/>
				<node label="aggressive/threatening movements, posture, or expression" code="gen-threat-move" value-mg="((0 0) (10 1))"/>
				<node label="preoccupied/detached demeanour" code="gen-detached" value-mg="((0 0) (10 1))"/>
				<node label="eyes" code="gen-eyes" generic-type="gd">
					<node label="avoid eye contact" code="gen-avoid-eye-contact" value-mg="((0 0) (10 1))"/>
					<node label="eye movement" code="gen-eye-movement" value-mg="((UNRESPONSIVE-GLAZED 1) (APPROPRIATE 0) (FIXED-STARING 1) (DARTING 1))" generic-type="gd" generic-datum="gd"/></node>
			</node>
			<node label="congruence of physical, verbal, and emotional presentation" code="gen-congruence" value-mg="((0 0) (10 1))"/></node>
		<node label="demographics" code="gen-demog" generic-type="gd">
			<node label="age" code="gen-age" value-mg="((15 0) (50 0.2) (80 1))" generic-type="gd" generic-datum="gd"/>
			<node label="gender" code="gen-gender" value-mg="((MALE 1) (FEMALE 0))" generic-type="gd" generic-datum="gd"/>
			<node label="relationship status" code="gen-marital-status" filter-q="">
				<node label="living with partner" code="partner-share-acc" value-mg="((no 1)(yes 0))"/></node>
			<node label="occupants sharing accommodation other than a partner" code="gen-accom-share" filter-q="">
				<node label="Dependents" code="gen-accom-depndnts" filter-q="">
					<node label="number of dependents" code="gen-accom-num-dep" value-mg="((0 0) (8 1))"/>
					<node label="age of youngest dependent" code="gen-dep-ygnst-age" value-mg="((0 1) (10 0.7) (18 0))"/></node>
				<node label="number of non-dependents sharing accommodation" code="gen-accm-share-nd" value-mg="((0 0)(5 1))"/></node>
			<node label="ethnicity" code="gen-ethnicity" value-mg="((WHITE-BRITISH 0) (WHITE-IRISH 0) (OTHER-WHITE 0) (WHITE-BLACK-CARIBBEAN 0) (WHITE-BLACK-AFRICAN 0)    (WHITE-ASIAN 0) (OTHER-MIXED 0) (INDIAN 0) (PAKISTANI 0) (BANGLADESHI 0) (OTHER-ASIAN 0) (BLACK-CARIBBEAN 0)    (BLACK-AFRICAN 0) (OTHER-BLACK 0) (CHINESE 0) (OTHER-ETHNIC 0))" generic-type="gd" generic-datum="gd"/>
			<node label="Multi-Agency Public Protection Arrangements" code="mappa" value-mg="((YES 1)(NO 0))" generic-type="gd" generic-datum="gd"/></node>
	</node>
	<node label="vulnerability of service user" code="vuln-su" value-mg="((0 0) (10 1))">
		<node label="vulnerability specific questions" code="vuln-specific" layer="0" screening="0" screening-only="true">
			<node label="falls" code="falls" layer="0" filter-q="" screening="0">
				<node label="recent-falls" code="recent-falls" filter-q="">
					<node label="causes of falls and accidents known" code="falls-reasons" value-mg="((yes 0) (no 1))"/></node>
				<node label="fragility fractures" code="frailty" value-mg="((yes 1) (no 0))"/></node>
			<node label="person's appearance and behaviour indicators of vulnerability" code="vuln-app-behavr" layer="0" screening="0">
				<node label="appearance suggesting abuse by others" code="app-vuln-abuse" value-mg="((0 0)(10 1))"/>
				<node label="behaviour causing potential vulnerability to abuse by others" code="vuln-abuse-behav">
					<node label="sexual vulnerability" code="sex-vuln" value-mg="((0 0) (10 1))"/>
					<node label="physical vulnerability" code="phys-vuln" value-mg="((0 0) (10 1))"/>
					<node label="emotional vulnerability" code="emot-vuln" value-mg="((0 0) (10 1))"/>
					<node label="financial vulnerability" code="finan-vuln" value-mg="((0 0) (10 1))"/></node>
				<node label="wandering behaviour" code="wandering" value-mg="((yes 1) (no 0))"/>
				<node label="confusion and disorientation" code="dis-conf" value-mg="((0 0) (10 1))"/></node>
			<node label="ability to live independently" code="indep-living" layer="0" screening="0">
				<node label="dependence on carers" code="carers" value-mg="((0 0) (10 1))"/>
				<node label="living skills" code="gen-liv-skills" value-mg="((0 0) (10 1))"/></node>
		</node>
		<node label="state of mind" code="gen-state-mind" generic-type="gd">
			<node label="feelings/emotions" code="gen-feel-emot" layer="0" screening="0" generic-type="gd">
				<node label="mood swings/lability" code="gen-mood-swings" value-mg="((0 0) (10 1))"/>
				<node label="negative feelings about the self" code="gen-negative-self" value-mg="((0 0) (10 1))" pathways="(wellbeing ptsd)"/>
				<node label="hopelessness" code="gen-hopeless" header="Questions on hopelessness" generic-type="g">
					<node label="life not worth living" code="gen-life-not-livng" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
					<node label="plans for the future" code="gen-plans-future" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/></node>
				<node label="angry emotions" code="gen-angry-emotns" value-mg="((0 0) (10 1))" pathways="(ptsd)" screening="0"/>
				<node label="anxiety-based emotions" code="gen-anx-emotns" value-mg="((0 0) (10 1))" pathways="(wellbeing ptsd)"/>
				<node label="helplessness" code="gen-helpless" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
				<node label="sad/downbeat" code="gen-sad" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
				<node label="distress" code="gen-distress" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
				<node label="jealousy" code="gen-jealous" value-mg="((0 0) (10 1))"/></node>
			<node label="person's perspective of self worth" code="gen-self-worth-p" layer="0" screening="0" generic-type="gd">
				<node label="worthlessness" code="worthlessness" value-mg="((0 0) (10 1))" layer="0" pathways="(wellbeing)" screening="0"/>
				<node label="grandiosity" code="grandiosity" value-mg="((0 0) (10 1))"/></node>
		</node>
		<node label="personality and way of thinking" code="gen-person-thinking" generic-type="gd">
			<node label="personality issues" code="gen-personality" layer="0" screening="0" generic-type="gd">
				<node label="impulsiveness" code="gen-impulse" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
				<node label="assertiveness" code="gen-assertive" value-mg="((NOT-ASSERTIVE 1) (SOMEWHAT-ASSERTIVE 0.3) (NORMALLY-ASSERTIVE 0) (VERY-ASSERTIVE 0) (EXTREMELY-ASSERTIVE 0))" generic-type="gd" generic-datum="gd"/>
				<node label="ability to empathise" code="gen-empathy-abil" value-mg="((0 0) (10 1))"/>
				<node label="dependence" code="gen-dependence" value-mg="((0 0) (10 1))"/>
				<node label="controlling/organisational approach" code="gen-controlling" value-mg="((chaotic 1) (disorganised 0.2) (normal 0) (very-organised 0.1)(obsessional-perfectionist 0.2))" generic-type="gd" generic-datum="gd"/>
				<node label="capacity to cope with major life stresses" code="gen-coping-abil" value-mg="((0 0) (10 1))"/>
				<node label="hostility" code="gen-hostile" value-mg="((0 0) (10 1))" pathways="(ptsd)" screening="0"/>
				<node label="reliability" code="gen-reliable" value-mg="((0 0) (10 1))"/>
				<node label="personality disorder" code="gen-pers-dis" value-mg="((YES 1) (NO 0))"/></node>
			<node label="problems with mental faculties/cognitive capacity" code="ment-fac" layer="0" filter-q="" pathways="(ptsd)" generic-type="g">
				<node label="impaired cognitive function" code="gen-impaird-cog" value-mg="((none 0)(mild 0.3)(moderate 0.6)(severe 1))"/>
				<node label="changes in thinking processes and memory" code="gen-cog-think-mem" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
				<node label="concentration" code="gen-concentr" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
				<node label="learning disabilities" code="gen-learn-disab" value-mg="((none 0)(mild 0.3)(moderate 0.6)(severe 0.8) (profound 1))"/></node>
			<node label="insight and responsibility" code="insight-resp" layer="0" generic-type="g">
				<node label="insight into behaviour and consequences" code="gen-insght-behvr" value-mg="((0 0) (10 1))"/>
				<node label="responsibility for impact of behaviour on others" code="gen-resp-impct-oth" value-mg="((0 0) (10 1))"/>
				<node label="need for help with difficulties" code="gen-nd-hlp-diff" value-mg="((0 0) (10 1))"/></node>
		</node>
		<node label="health and care" code="gen-health-care" generic-type="gd">
			<node label="history of mental health problems" code="mental-health" layer="0" filter-q="" screening="0">
				<node label="clinical diagnosis of depression" code="clin-depression" layer="0" filter-q="" screening="0">
					<node label="stage of depression" code="gen-dep-stage" value-mg="((FIRST-DIAGNOSIS 1) (RECOVERY-SINGLE-EPISODE 0) (RECOVERY-REPEAT-EPISODES 0.4) (RELAPSE 1))" layer="0" screening="0"/></node>
				<node label="current symptoms of mental illness" code="gen-mntl-cur-sympt" layer="0" filter-q="" screening="0">
					<node label="voice hallucinations" code="gen-voice-hal" layer="0" filter-q="" screening="0" generic-type="g">
						<node label="likelihood of acting on the voices" code="gen-prob-act-voice" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
						<node label="type of voices" code="gen-voices-type">
							<node label="danger of voices to self" code="gen-voice-dang-s" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
							<node label="danger of voices to others" code="gen-voice-dang-o" value-mg="((0 0) (10 1))" layer="0" screening="0"/></node>
					</node>
					<node label="paranoid delusions" code="gen-paranoid-del" layer="0" filter-q="" screening="0" generic-type="g">
						<node label="likelihood of acting on delusions" code="gen-prob-act-par-del" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
						<node label="type of paranoid delusions" code="gen-type-paranoid-del">
							<node label="thoughts about particular individuals" code="gen-paran-del-spec" value-mg="((0 0) (10 1))"/>
							<node label="being harmed, killed, or persecuted" code="gen-paran-del-pers" value-mg="((0 0) (10 1))"/></node>
					</node>
					<node label="mania/hypomania" code="gen-mania" value-mg="((0 0) (10 1))"/></node>
			</node>
			<node label="physical health problems" code="gen-phys-hlth-prb" layer="0" generic-type="gd">
				<node label="chronic disease" code="gen-chronic-disease" filter-q="" multiple-tick="" generic-type="gd">
					<node label="tinnitus" code="tinnitus" value-mg="((yes 1) (no 0))"/>
					<node label="diabetes" code="diabetes" value-mg="((yes 1) (no 0))"/>
					<node label="multiple sclerosis" code="multiple-sclerosis" value-mg="((yes 1) (no 0))"/>
					<node label="asthma" code="asthma" value-mg="((yes 1) (no 0))"/>
					<node label="heart disease" code="heart-disease" value-mg="((yes 1) (no 0))"/>
					<node label="kidney disease" code="kidney-disease" value-mg="((yes 1) (no 0))"/>
					<node label="lung disease" code="lung-disease" value-mg="((yes 1) (no 0))"/>
					<node label="arthritis" code="arthritis" value-mg="((yes 1) (no 0))"/>
					<node label="high blood pressure" code="high-blood-pressure" value-mg="((yes 1) (no 0))"/>
					<node label="any other condition" code="other" value-mg="((yes 1) (no 0))"/></node>
				<node label="when life-threatening or degenerative illness first diagnosed" code="gen-phys-hlth-deg-diag" value-mg="((3 1) (36 0))"/>
				<node label="pain" code="gen-phys-hlth-pain" value-mg="((0 0) (10 1))"/>
				<node label="mobility and dexterity" code="gen-phys-hlth-disa" value-mg="((0 0) (10 1))"/>
				<node label="communication impairment" code="gen-com-imp" value-mg="((0 0) (10 1))"/>
				<node label="deterioration in physical health" code="gen-phys-hlth-det" value-mg="((0 0) (10 1))"/></node>
			<node label="concordance with health services/medication/therapies" code="gen-meds-therpy" layer="0" generic-type="g">
				<node label="concordance" code="gen-meds-concord" value-mg="((0 0) (10 1))"/>
				<node label="person's perception of the supportiveness of service received" code="gen-serv-perc-supp" value-mg="((0 0) (10 1))"/>
				<node label="perceived benefit of medication/therapies" code="gen-med-perc-benft" value-mg="((0 0) (10 1))"/></node>
		</node>
		<node label="involvement with life and others" code="gen-involve-social" generic-type="gd">
			<node label="motivation and engagement with world" code="motive-eng" layer="0">
				<node label="engagement with world" code="gen-eng-world" generic-type="gd">
					<node label="physical withdrawal from world" code="gen-phys-withd" value-mg="((0 0) (10 1))"/>
					<node label="mental withdrawal" code="gen-mental-withd" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/></node>
				<node label="general motivation in life" code="gen-motivation" value-mg="((0 0) (10 1))" pathways="(wellbeing ptsd)"/>
				<node label="lack of energy, drive, or enthusiasm" code="gen-listless" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/></node>
			<node label="social context" code="gen-soc-contxt" layer="0" pathways="(ptsd)" generic-type="gd">
				<node label="relationships" code="gen-relatnshps" layer="0" generic-type="gd">
					<node label="external network of relationships" code="gen-net-relat" value-mg="((0 0) (10 1))" pathways="(wellbeing ptsd)"/>
					<node label="nature of relationships" code="gen-relat-nature">
						<node label="any supportive relationships" code="gen-relat-supp" value-mg="((0 0) (10 1))" pathways="(wellbeing)"/>
						<node label="detrimental relationships" code="gen-relat-detr" value-mg="((0 0) (10 1))"/></node>
					<node label="detrimental changes to relationships" code="gen-relat-detr-chg" value-mg="((0 0) (10 1))"/></node>
				<node label="living arrangements" code="gen-living-arr" layer="0" generic-type="gd">
					<node label="frequency of moving accommodation" code="gen-move-freq" value-mg="((LESS-THAN-EVERY-YEAR 0) (ONCE-EVERY-YEAR 0.5) (SEVERAL-TIMES-YEAR 0.8) (ONCE-A-MONTH-OR-MORE 1))"/>
					<node label="losing accommodation" code="gen-accom-loss" value-mg="((yes 1)(no 0))"/>
					<node label="support at home" code="gen-home-type" value-mg="((HOMELESS 1) (HOSTEL 0.8) (TWENTY-FOUR-HOUR-CARE-OR-SUPERVISION 0) (daily-support 0.1)(limited-support 0.2)(no-support 0.5))"/>
					<node label="neighbourhood" code="gen-neighbrhd">
						<node label="isolated accommodation" code="gen-isol-accom" value-mg="((0 0) (10 1))"/>
						<node label="risky neighbourhood" code="gen-neigbrhd-rsky" value-mg="((0 0) (10 1))"/></node>
					<node label="state of accommodation" code="gen-accom-state">
						<node label="care of home" code="gen-accom-hm-care" value-mg="((0 0) (10 1))"/>
						<node label="habitable accommodation" code="gen-accom-habitbl" value-mg="((0 0) (10 1))"/></node>
				</node>
				<node label="financial and employment concerns" code="gen-finance-empl" layer="0" generic-type="gd">
					<node label="financial problems" code="gen-finance-prob" header="Questions on financial problems">
						<node label="anxiety about perceived level of debts" code="gen-perc-debt-anx" value-mg="((0 0) (10 1))"/>
						<node label="chronic poverty" code="gen-poverty" value-mg="((0 0) (10 1))"/></node>
					<node label="employment" code="gen-employment" header="Questions on employment">
						<node label="frequency of changing jobs" code="gen-job-chg-frq" value-mg="((0 0) (10 1))"/>
						<node label="recent or potential detrimental change to employment" code="gen-rec-bad-job-ch" value-mg="((0 0) (10 1))"/></node>
				</node>
			</node>
			<node label="general current behaviour" code="gen-currnt-bhvr" layer="0" pathways="(ptsd)" generic-type="gd">
				<node label="reckless risk taking" code="gen-rsk-behavr" value-mg="((0 0) (10 1))" pathways="(ptsd)"/>
				<node label="unintentional risk making" code="gen-unint-risk-behavr" value-mg="((0 0) (10 1))"/>
				<node label="sleep disturbance" code="gen-sleep-dist" value-mg="((0 0) (10 1))" pathways="(ptsd)"/>
				<node label="uncharacteristic recent change in behaviour" code="gen-unusl-rec-bhvr" value-mg="((0 0) (10 1))"/>
				<node label="challenging behaviour" code="gen-chall-bhvr" value-mg="((0 0) (10 1))"/>
				<node label="daily activity" code="gen-day-actvty">
					<node label="structure of day" code="gen-day-struct" value-mg="((0 0) (10 1))"/>
					<node label="general level of activity during the day" code="gen-day-actvty-lev" value-mg="((INACTIVE 1) (UNDERACTIVE 0.5) (NORMAL 0) (OVERACTIVE 0.1) (HYPERACTIVE 0.3))" generic-type="gd" generic-datum="gd"/></node>
				<node label="appropriateness of diet" code="gen-app-diet" header="Questions about diet" generic-type="g">
					<node label="eating healthily" code="gen-diet-eating" value-mg="((0 0) (10 1))"/>
					<node label="weight" code="gen-diet-weight">
						<node label="person's weight" code="gen-diet-weigt-ext" value-mg="((EXTREME-UNDERWEIGHT 1) (UNDERWEIGHT 0.5) (WEIGHT-OK 0) (OVERWEIGHT 0.5) (EXTREME-OVERWEIGHT 1))"/>
						<node label="extreme weight change" code="gen-diet-weigt-chg" value-mg="((0 0) (10 1))"/></node>
					<node label="drinking" code="gen-diet-drink" value-mg="((0 0) (10 1))"/></node>
			</node>
			<node label="substance misuse" code="gen-subs-misuse" layer="0" filter-q="" screening="0" generic-type="gd">
				<node label="detrimental effects of alcohol misuse" code="gen-alc-misuse" value-mg="((0 0) (10 1))" layer="0" screening="0"/>
				<node label="detrimental effects of drugs misuse" code="gen-drug-misuse" value-mg="((0 0) (10 1))" layer="0" screening="0"/></node>
		</node>
		<node label="adverse life events" code="adv-life-event" filter-q="" pathways="(ptsd)" generic-type="gd">
			<node label="abuse to person" code="gen-life-abuse" filter-q="" pathways="(ptsd)" generic-type="g">
				<node label="sexual abuse" code="gen-life-sex-abuse" filter-q="" pathways="(ptsd)">
					<node label="most recent episode of sexual abuse" code="gen-sex-abse-last" value-mg="((0 1) (5 0.5))"/>
					<node label="sexual abuse during childhood (0 to 16)" code="gen-sex-abse-as-ch" value-mg="((YES 1) (NO 0))" pathways="(ptsd)"/></node>
				<node label="physical abuse" code="gen-phys-abse" filter-q="" pathways="(ptsd)">
					<node label="most recent episode of physical abuse" code="gen-phys-abse-last" value-mg="((0 1) (24 0.5))"/>
					<node label="physical abuse during childhood (0 to 16)" code="gen-phy-abse-as-ch" value-mg="((YES 1) (NO 0))" pathways="(ptsd)"/></node>
				<node label="emotional abuse" code="gen-emot-abse" filter-q="" pathways="(ptsd)">
					<node label="most recent episode of emotional abuse" code="gen-emot-abse-last" value-mg="((0 1) (24 0.5))"/>
					<node label="emotional abuse during childhood (0 to 16)" code="gen-emo-abse-as-ch" value-mg="((YES 1) (NO 0))"/></node>
				<node label="financial abuse" code="gen-financial-abuse" value-mg="((YES 1) (NO 0))"/></node>
			<node label="other challenging experiences" code="other-chall-exp" header="Other challenging experiences">
				<node label="forensic/criminal proceedings" code="gen-forensic-proc" filter-q="">
					<node label="current/criminal proceedings" code="gen-forensic-proc-curr" value-mg="((YES 1) (NO 0))"/></node>
				<node label="environment person grew up in" code="gen-env-grew-up" value-mg="((0 0) (10 1))" pathways="(ptsd)"/>
				<node label="eating disorders" code="gen-eating-dis" value-mg="((0 0) (10 1))"/>
				<node label="educational experience" code="gen-educ-expr" value-mg="((0 0) (10 1))" pathways="(ptsd)"/>
				<node label="serious injury" code="serious-injury" value-mg="((0 0) (10 1))" pathways="(ptsd)"/></node>
		</node>
		<node label="person's behavioural presentation during assessment" code="gen-presentation" filter-q="" screening="0" generic-type="gd">
			<node label="person's engagement with assessor" code="gen-engagement" filter-q="" generic-type="gd">
				<node label="rapport" code="gen-rapport" value-mg="((0 0) (10 1))"/>
				<node label="person's responsiveness" code="gen-responsve" value-mg="((0 0) (10 1))"/>
				<node label="assessor's uneasiness about the person" code="gen-gut-assmnt" value-mg="((0 0) (10 1))"/></node>
			<node label="verbal indicators of risk" code="gen-risk-verbal" filter-q="" generic-type="gd">
				<node label="tone" code="gen-risk-tone">
					<node label="degree of aggression/hostility" code="gen-risk-aggrsv" value-mg="((0 0) (10 1))"/>
					<node label="how upbeat or downbeat/depressed" code="gen-risk-upbeat" value-mg="((0 0) (10 1))"/></node>
				<node label="degree to which the person is making sense" code="gen-coherence" value-mg="((0 0) (10 1))"/></node>
			<node label="body language and expression" code="gen-body-face" filter-q="" generic-type="gd">
				<node label="body language indicating distress" code="gen-distrss-b-lang" value-mg="((0 0) (10 1))"/>
				<node label="movements, posture, facial expression indicating low mood" code="gen-low-mood" value-mg="((0 0) (10 1))"/>
				<node label="aggressive/threatening movements, posture, or expression" code="gen-threat-move" value-mg="((0 0) (10 1))"/>
				<node label="preoccupied/detached demeanour" code="gen-detached" value-mg="((0 0) (10 1))"/>
				<node label="eyes" code="gen-eyes" generic-type="gd">
					<node label="avoid eye contact" code="gen-avoid-eye-contact" value-mg="((0 0) (10 1))"/>
					<node label="eye movement" code="gen-eye-movement" value-mg="((UNRESPONSIVE-GLAZED 1) (APPROPRIATE 0) (FIXED-STARING 1) (DARTING 1))" generic-type="gd" generic-datum="gd"/></node>
			</node>
			<node label="congruence of physical, verbal, and emotional presentation" code="gen-congruence" value-mg="((0 0) (10 1))"/></node>
		<node label="demographics" code="gen-demog" generic-type="gd">
			<node label="age" code="gen-age" value-mg="((18 1) (50 0) (70 0.8) (80 1))" generic-type="gd" generic-datum="gd"/>
			<node label="gender" code="gen-gender" value-mg="((MALE 0) (FEMALE 1))" generic-type="gd" generic-datum="gd"/>
			<node label="relationship status" code="gen-marital-status" filter-q="">
				<node label="living with partner" code="partner-share-acc" value-mg="((no 1)(yes 0))"/></node>
			<node label="occupants sharing accommodation other than a partner" code="gen-accom-share" filter-q="">
				<node label="Dependents" code="gen-accom-depndnts" filter-q="">
					<node label="number of dependents" code="gen-accom-num-dep" value-mg="((0 0) (8 1))"/>
					<node label="age of youngest dependent" code="gen-dep-ygnst-age" value-mg="((0 1) (10 0.7) (18 0))"/></node>
				<node label="number of non-dependents sharing accommodation" code="gen-accm-share-nd" value-mg="((0 0)(5 1))"/></node>
			<node label="ethnicity" code="gen-ethnicity" value-mg="((WHITE-BRITISH 0) (WHITE-IRISH 0) (OTHER-WHITE 0) (WHITE-BLACK-CARIBBEAN 0) (WHITE-BLACK-AFRICAN 0)    (WHITE-ASIAN 0) (OTHER-MIXED 0) (INDIAN 0) (PAKISTANI 0) (BANGLADESHI 0) (OTHER-ASIAN 0) (BLACK-CARIBBEAN 0)    (BLACK-AFRICAN 0) (OTHER-BLACK 0) (CHINESE 0) (OTHER-ETHNIC 0))" generic-type="gd" generic-datum="gd"/>
			<node label="Multi-Agency Public Protection Arrangements" code="mappa" value-mg="((YES 1)(NO 0))" generic-type="gd" generic-datum="gd"/></node>
	</node>
</node>
`
)