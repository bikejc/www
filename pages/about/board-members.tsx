import {NextPage} from "next";
import {Page} from "../../src/page";
import {ReactNode} from "react";

const BoardMember = ({ name, title, src, id, children }: {
    name: string
    title: string
    src: string
    id: string
    children: ReactNode
}) => {
    return (
        <div id={id} className="field-collection-view clearfix view-mode-full">
            <div about="/field-collection/field-board-members-bio/5"
                 className="entity entity-field-collection-item field-collection-item-field-board-members-bio clearfix"
                 typeof="">
                <div className="content">
                    <div className="field field-name-field-bio-position-title field-type-text field-label-hidden field-wrapper">
                        {title}
                    </div>
                    <div className="field field-name-field-bio-member-name field-type-text field-label-hidden field-wrapper">
                        {name}
                    </div>
                    <div className="field field-name-field-bio-member-photo field-type-image field-label-hidden field-wrapper">
                        <img alt="" height="113" src={src} typeof="foaf:Image" width="200" />
                    </div>
                    <div className="field field-name-field-bio-member-about field-type-text-long field-label-hidden field-wrapper">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Home: NextPage = () => {
    return (
        <Page
            path={"/about/board-members"}
            banner={"/files/bike-gathering-page-header.jpg"}
            articleClasses={["node-board-members"]}
        >
            <h4>Meet our Bike JC Board Members</h4>
            <div className="field field-name-field-board-members-bio field-type-field-collection field-label-hidden field-wrapper">
                <BoardMember id={"ayla"} name={"Ayla Schermer"} title={"President"} src={"/files/ayla-schermer-bio.jpg"}>
                    <p>
                        Ayla is a proud Pittsburgh native turned proud Jersey City resident since 2012. She
                        lives downtown in the Van Vorst Park neighborhood, and is an accountant at a
                        software company in lower Manhattan. Prior to joining the board in 2017, Ayla
                        was a Bike JC volunteer and was also very involved in the launch of CitiBike in
                        Jersey City in 2015. Outside of biking advocacy, Ayla is active in the Jersey
                        City community as a singer in the North River Sing community chorus and as a
                        devoted member of the Van Vorst Park Association. She is also an avid Broadway
                        theatergoer, a sports fanatic, and a travel lover who checks out the biking
                        infrastructure everywhere she goes.
                    </p>
                </BoardMember>
                <BoardMember id={"tony"} name={"Tony Borelli"} title={"Vice President"} src={"/files/tony-borelli-bio.jpg"}>
                    <p>
                        Tony joined Bike JC’s board in 2014 after volunteering for us for several
                        years; today he is the manager of our social media presence, a liaison to
                        the Jersey City government, and a chief marshal for many of our organized
                        bike rides. A native of Queens, Tony lived in several urban and suburban
                        towns in North Jersey before moving to Downtown Jersey City’s Hamilton Park
                        neighborhood in 1997. He lives on the same block today. After a decade as a
                        newspaper reporter, and stints editing and writing for Manhattan management
                        and marketing firms, Tony is currently a proofreader and copy editor for
                        Prudential Insurance in Newark, where he is also a member of the revived
                        Brick City Bike Collective advocacy and riding group. A longtime explorer of
                        Jersey City and its urban environs by bike and mass transit, Tony also
                        enjoys triathlons, marathons and distance running, and Jersey City’s art,
                        music, dining, and nightlife scene.
                    </p>
                </BoardMember>
                <BoardMember id={"patrick"} name={"Patrick Conlon"} title={"Advisor"} src={"/files/patrick-conlon-bio.JPG"}>
                    <p>
                        That's Patrick and his cargo bike. He bought it in Vermont and pedaled it all
                        the way back to Jersey City. He can be seen around town delivering things
                        from local businesses to residents in Jersey City, Hoboken and Bayonne.
                        Sometimes he moves things from one business to another business. "I'm part
                        of the non polluting local economic engine!" He tries to use his car as
                        little as possible.
                    </p>
                    <p>
                        He became a resident of the Heights area in 1991 and really loves the
                        diversity of the neighborhood.
                    </p>
                    <p>
                        Patrick got involved with BikeJC 7 years ago as a Marshall for the Ward Tour
                        and joined the board of trustees about 3 years ago. "I am honored to serve
                        as BikeJC's new president and hope that I can do proud those that came
                        before me so that the organization's mission of improved cycling and
                        pedestrian safety is significantly advanced." He believes in people power
                        and people-powered change...like urban cycling.
                    </p>
                </BoardMember>
                <BoardMember id={"daniel"} name={"Daniel Morteh"} title={"Board Member"} src={"/files/DanielMorteh.jpg"}>
                    <p>
                        Born and raised in Jersey City, Daniel Morteh has been a cycling enthusiast for 12
                        years. He bought his first bike at age 24
                        just to get to work on time and it started a deep passion for cycling. Now at 36
                        years old Daniel has evolved from a city commuter
                        to endurance cyclist participating in as many Century (100 mile) bike rides as
                        possible.
                    </p>
                    <p>
                        He has been a member of The Major Taylor Cycling Club of New Jersey since 2016
                        as well as their New York charter, Major Taylor Iron Riders.
                        He also co-founded the JC Goonies, a group of urban cyclists. So far he has
                        ridden several thousand miles and is planning on traveling to participate in
                        various ultra-endurance events.
                    </p>
                    <p>
                        Daniel also works as mechanic for Jersey City Bicycle Company and a spin
                        instructor for Hamilton Health and Fitness and Goldman Sachs.
                        He believes that the bicycle can be a great tool to bring all types of people
                        together.
                    </p>
                </BoardMember>
                <BoardMember id={"deirdre"} name={"Deirdre Newman"} title={"Board Member"} src={"/files/deidre-newman-bio.jpg"}>
                    <p>
                        Deirdre is an illustrator/artist working in the field of decorative painting.
                        She also gives walking tours of community gardens and bicycling tours in NYC
                        and is expanding to tours of JC.
                    </p>
                    <p>
                        She keeps bees in Riverview
                        Community Garden in The Heights. She moved to JC in 2013 and lives on
                        Hamilton Park.
                    </p>
                    <p>
                        She bicycles up and down both sides of the Hudson
                        and to the beautiful bird sanctuary in Liberty State Park every chance she
                        gets amongst other excursions.
                    </p>
                    <p>
                        She has been an avid cyclist since
                        bartering with her junior high school to get out of gym in exchange for
                        riding to school and back every day.
                    </p>
                </BoardMember>
                <BoardMember id={"ryan"} name={"Ryan Williams"} title={"Secretary"} src={"/files/ryan light-up tern.jpeg"}>
                    <p>
                        Ryan is a computer programmer and long-time bike-share user who bought an e-bike during the pandemic
                        and {" "}<a href="https://ebikes.neighbor-ryan.org/" target="_blank">became obsessed with their potential to revolutionize urban transportation</a>.
                    </p>
                    <p>
                        He maintains a Citibike dashboard at <a href="https://ctbk.dev/" target="_blank">ctbk.dev</a> and posts ride videos and commentary on
                        {" "}<a href="https://www.youtube.com/channel/UCUEDi4kDGExvmx0g0gkVwkA" target="_blank">YouTube</a>,
                        {" "}<a href="https://twitter.com/CarsDontFitJC" target="_blank">Twitter</a>, and
                        {" "}<a href="https://www.instagram.com/neighbor_ryan/" target="_blank">Instagram</a>.
                    </p>
                </BoardMember>
                <BoardMember id={"beatriz"} name={"Beatriz Bofill"} title={"Board Member"} src={"/files/beatriz-bio.png"}>
                    <p>
                    </p>
                </BoardMember>
                <BoardMember id={"tom"} name={"Tom Keane"} title={"Board Member"} src={"/files/tom-bio.png"}>
                    <p>
                    </p>
                </BoardMember>
                <BoardMember id={"damian"} name={"Damian Wieczorek"} title={"Treasurer"} src={"/files/damian-wieczorek-bio.jpg"}>
                    <p>
                        Damian is the co-founder and Treasurer of the organization and currently
                        resides in the Lafayette section of Jersey city.
                    </p>
                </BoardMember>
                <BoardMember id={"alex"} name={"Alexandra Nagy"} title={"Board Member"} src={"/files/alexandra-nagy.jpg"}>
                    <p>
                        Alexandra Nagy is a licensed social worker who manages a volunteer program
                        for seniors in Hudson County.
                    </p>
                    <p>
                        She has been involved with Bike JC for
                        3 years as a volunteer. She recently became a board member last year and
                        helps with different aspects of Bike JC.
                    </p>
                </BoardMember>
            </div>
        </Page>
    )
}

export default Home
